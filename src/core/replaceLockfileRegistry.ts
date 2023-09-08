import * as fs from "node:fs";

import replaceRegistry from "./replaceRegistry.js";

export default function replaceLockfileRegistry(params: {
  lockfileList: string[];
  registry: string;
}) {
  const { lockfileList, registry } = params;

  if (registry === undefined) {
    throw new Error("registry is undefined.");
  }

  for (const lockfile of lockfileList) {
    if (!fs.existsSync(lockfile)) {
      console.error(`[replace-lockfile-registry] ${lockfile} not exists.`);
      continue;
    }

    const lockfileContent = fs.readFileSync(lockfile, "utf-8");

    const newLockfileContent = replaceRegistry({
      lockfileContent,
      registry,
    });

    fs.writeFileSync(lockfile, newLockfileContent, "utf-8");

    console.log(
      `[replace-lockfile-registry] replace ${lockfile} registry success.`
    );
  }
}
