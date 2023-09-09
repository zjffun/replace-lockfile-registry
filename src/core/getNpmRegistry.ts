import * as childProcess from "node:child_process";

const defaultRegistry = "https://registry.npmjs.org/";

export default function getNpmRegistry(params?: { cwd?: string }) {
  try {
    const env = {
      ...process.env,
    };

    // Fix env when running tests
    if (process.env.NODE_ENV === "test") {
      env.TS_NODE_PROJECT = undefined;
      env.NODE_OPTIONS = undefined;
      env.npm_config_registry = undefined;
    }

    const registry = childProcess
      .execSync("npm config get registry", {
        cwd: params?.cwd,
        env,
      })
      .toString()
      .trim();

    return registry;
  } catch (error) {
    console.warn(
      `[replace-lockfile-registry] can't get npm registry, using default registry: ${defaultRegistry}`
    );
  }

  return defaultRegistry;
}
