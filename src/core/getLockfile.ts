import * as fs from "node:fs";
import * as path from "node:path";

export default function (params?: { cwd?: string }) {
  let cwd = params?.cwd ?? process.cwd();

  const npmLockfile = path.join(cwd, "package-lock.json");
  const yarnLockfile = path.join(cwd, "/yarn.lock");
  const pnpmLockfile = path.join(cwd, "/pnpm-lock.yaml");
  const allLockfile = [npmLockfile, yarnLockfile, pnpmLockfile];

  const lockfileList = allLockfile.filter((lockfile) => {
    return fs.existsSync(lockfile);
  });

  return lockfileList;
}
