import path from "path";
import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

describe.each(["cjs", "cts", "mjs", "mts", "ts", "ts-require"])(
  "modules",
  (type) => {
    jest.setTimeout(10_000);

    const pkgPath = path.join(__dirname, `./module/${type}`);

    beforeAll(async () => {
      const project = path.join(__dirname, "..");
      await exec(`npm run build --prefix ${project}`, {});
    });

    afterAll(async () => {
      await Promise.all([exec(`rm -rf ${pkgPath}/node_modules`, {})]);
    });

    it(type, async () => {
      await exec(`npm test --prefix ${pkgPath}`, {});
    });
  },
);
