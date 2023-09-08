import { expect } from "chai";
import replaceRegistry from "../../src/core/replaceRegistry.js";

describe("replaceRegistry", () => {
  it("npm should work", () => {
    expect(
      replaceRegistry({
        lockfileContent: `{
  "resolved": "https://registry.npmmirror.com/test/test/-/test-0.0.0.tgz",
}`,
        registry: "https://test.com/",
      })
    ).to.be.equal(`{
  "resolved": "https://test.com/test/test/-/test-0.0.0.tgz",
}`);
  });

  it("yarn should work", () => {});

  it("pnpm should work", () => {});
});
