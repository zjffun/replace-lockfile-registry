import * as path from "node:path";
import { Command } from "commander";

import getLockfile from "../core/getLockfile.js";
import getNpmRegistry from "../core/getNpmRegistry.js";
import replaceLockfileRegistry from "../core/replaceLockfileRegistry.js";

const resolveLockfile = (value, dummyPrevious) => {
  const previous = dummyPrevious || [];

  const result = [...previous, path.resolve(process.cwd(), value)];

  return result;
};

export default function (program: Command) {
  program
    .option(
      "--lockfile <string...>",
      "lockfile, eg: ./package-lock.json ./yarn.lock",
      resolveLockfile
    )
    .option("--registry <string>", "registry, eg: https://registry.npmjs.org/")
    .action(async (opts) => {
      let lockfile = opts.lockfile;
      if (!lockfile) {
        lockfile = getLockfile();
      }

      if (!lockfile.length) {
        console.error(
          `[replace-lockfile-registry] can not find lockfile from ${process.cwd()}.`
        );
        return;
      }

      let registry = opts.registry;
      if (!registry) {
        // 默认只用 npm 的 registry
        registry = getNpmRegistry();
      }

      replaceLockfileRegistry({
        lockfileList: lockfile,
        registry,
      });
    });
}
