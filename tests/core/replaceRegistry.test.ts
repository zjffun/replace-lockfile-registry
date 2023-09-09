import { expect } from "chai";

import { testRegistry } from "../utils.js";
import replaceRegistry from "../../src/core/replaceRegistry.js";

const npmmirrorRegistry = "https://registry.npmmirror.com/";

const testPkgPath = "test/test/-/test-0.0.0.tgz";

const testResolved = `${npmmirrorRegistry}${testPkgPath}`;

describe("replaceRegistry", () => {
  it("npm should work", () => {
    expect(
      replaceRegistry({
        lockfileContent: `{
  "resolved": "${testResolved}",
}`,
        registry: testRegistry,
      })
    ).to.be.equal(`{
  "resolved": "${testRegistry}${testPkgPath}",
}`);
  });

  it("yarn should work", () => {
    expect(
      replaceRegistry({
        lockfileContent: `resolved "${testResolved}"`,
        registry: testRegistry,
      })
    ).to.be.equal(`resolved "${testRegistry}${testPkgPath}"`);
  });

  it("pnpm should work", () => {
    expect(
      replaceRegistry({
        lockfileContent: `registry: ${npmmirrorRegistry}, tarball: ${testResolved}`,
        registry: testRegistry,
      })
    ).to.be.equal(
      `registry: ${testRegistry}, tarball: ${testRegistry}${testPkgPath}`
    );
  });
});
