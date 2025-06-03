import path from "path";
import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

describe("modules", () => {
  jest.setTimeout(10_000);

  beforeAll(async () => {
    const project = path.join(__dirname, "..");
    await exec(`npm run build --prefix ${project}`, {});
  });

  describe.each(["cjs", "cts", "mjs", "mts", "ts", "ts-require"])(
    "modules",
    (type) => {
      const pkgPath = path.join(__dirname, `./module/${type}`);

      afterAll(async () => {
        await Promise.all([exec(`rimraf ${pkgPath}/node_modules`, {})]);
      });

      it(type, async () => {
        await exec(`npm test --prefix ${pkgPath}`, {});
      });
    },
  );
});
