import * as path from "node:path";
/**
 * Using `import * as fse from "fs-extra";` `fse.removeSync` will be undefined
 * fs-extra/esm haven't type definition
 */
// @ts-ignore
import * as fse from "fs-extra/esm";
import { expect } from "chai";

import { testTempDir } from "../utils.js";
import getLockfile from "../../src/core/getLockfile.js";

describe("getLockfile", () => {
  before(() => {
    fse.ensureFileSync(path.join(testTempDir, "package-lock.json"));
    fse.ensureFileSync(path.join(testTempDir, "yarn.lock"));
    fse.ensureFileSync(path.join(testTempDir, "pnpm-lock.yaml"));
  });

  after(() => {
    fse.removeSync(testTempDir);
  });

  it("should work", () => {
    expect(
      getLockfile({
        cwd: testTempDir,
      })
    ).to.be.deep.equal([
      path.join(testTempDir, "package-lock.json"),
      path.join(testTempDir, "yarn.lock"),
      path.join(testTempDir, "pnpm-lock.yaml"),
    ]);
  });
});
