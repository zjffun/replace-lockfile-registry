import * as path from "node:path";
import * as fs from "node:fs";
import * as childProcess from "node:child_process";
/**
 * Using `import * as fse from "fs-extra";` `fse.removeSync` will be undefined
 * fs-extra/esm haven't type definition
 */
// @ts-ignore
import * as fse from "fs-extra/esm";
import { expect } from "chai";

import { testRegistry, testTempDir } from "../utils.js";
import getNpmRegistry from "../../src/core/getNpmRegistry.js";

describe("getNpmRegistry", () => {
  before(() => {
    const npmrcPath = path.join(testTempDir, ".npmrc");
    fse.ensureFileSync(npmrcPath);
    fs.writeFileSync(npmrcPath, `registry=${testRegistry}`);

    childProcess.execSync("npm init -y", {
      cwd: testTempDir,
      env: {
        ...process.env,
        TS_NODE_PROJECT: undefined,
        NODE_OPTIONS: undefined,
      },
    });
  });

  after(() => {
    fse.removeSync(testTempDir);
  });

  it("should work", () => {
    expect(
      getNpmRegistry({
        cwd: testTempDir,
      })
    ).to.be.equal(testRegistry);
  });
});
