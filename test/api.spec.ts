import path from "path";
import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

describe("api", () => {
  jest.setTimeout(30000);

  beforeAll(async () => {
    const project = path.join(__dirname, "..");
    await exec(`npm run build --prefix ${project}`, {});
  });

  it("esm", async () => {
    const pkgPath = path.join(__dirname, "./module/esm");
    await exec(`npm test --prefix ${pkgPath}`, {});
  });

  it("cjs", async () => {
    const pkgPath = path.join(__dirname, "./module/cjs");
    await exec(`npm test --prefix ${pkgPath}`, {});
  });

  it("ts", async () => {
    const pkgPath = path.join(__dirname, "./module/ts");
    await exec(`npm test --prefix ${pkgPath}`, {});
  });

  it("ts-require", async () => {
    const pkgPath = path.join(__dirname, "./module/ts-require");
    await exec(`npm test --prefix ${pkgPath}`, {});
  });
});
