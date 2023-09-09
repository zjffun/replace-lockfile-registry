import { fileURLToPath } from "node:url";

const testTempDir = fileURLToPath(new URL("../test.temp", import.meta.url));

const testRegistry = "https://test.com/";

export { testTempDir, testRegistry };
