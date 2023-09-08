import * as childProcess from "node:child_process";

const defaultRegistry = "https://registry.npmjs.org/";

export default function getNpmRegistry(params?: { cwd?: string }) {
  try {
    const registry = childProcess.execSync("npm config get registry", {
      cwd: params?.cwd,
    });

    return registry;
  } catch (error) {
    // do nothing
  }

  return defaultRegistry;
}
