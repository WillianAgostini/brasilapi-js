import path from "path";
import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

describe("modules", () => {
  jest.setTimeout(30000);

  const pkgPathEsm = path.join(__dirname, "./module/esm");
  const pkgPathCjs = path.join(__dirname, "./module/cjs");
  const pkgPathTs = path.join(__dirname, "./module/ts");
  const pkgPathTsRequire = path.join(__dirname, "./module/ts-require");

  beforeAll(async () => {
    const project = path.join(__dirname, "..");
    await exec(`npm run build --prefix ${project}`, {});
  });

  afterAll(async () => {
    await exec(`rm -rf ${pkgPathEsm}/node_modules`, {});
    await exec(`rm -rf ${pkgPathCjs}/node_modules`, {});
    await exec(`rm -rf ${pkgPathTs}/node_modules`, {});
    await exec(`rm -rf ${pkgPathTsRequire}/node_modules`, {});
  });

  it("esm", async () => {
    await exec(`npm test --prefix ${pkgPathEsm}`, {});
  });

  it("cjs", async () => {
    await exec(`npm test --prefix ${pkgPathCjs}`, {});
  });

  it("ts", async () => {
    await exec(`npm test --prefix ${pkgPathTs}`, {});
  });

  it("ts-require", async () => {
    await exec(`npm test --prefix ${pkgPathTsRequire}`, {});
  });
});
