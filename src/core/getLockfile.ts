import * as fs from "node:fs";

export default function () {
  const npmLockfile = process.cwd() + "/package-lock.json";
  const yarnLockfile = process.cwd() + "/yarn.lock";
  const pnpmLockfile = process.cwd() + "/pnpm-lock.yaml";
  const allLockfile = [npmLockfile, yarnLockfile, pnpmLockfile];

  const lockfileList = allLockfile.filter((lockfile) => {
    return fs.existsSync(lockfile);
  });

  return lockfileList;
}
