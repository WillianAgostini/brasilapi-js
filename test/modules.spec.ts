import path from "path";
import cp from "child_process";
import util from "util";

const exec = util.promisify(cp.exec);

describe("modules", () => {
  jest.setTimeout(10_000);

  const pkgPathEsm = path.join(__dirname, "./module/esm");
  const pkgPathCjs = path.join(__dirname, "./module/cjs");
  const pkgPathTs = path.join(__dirname, "./module/ts");
  const pkgPathTsRequire = path.join(__dirname, "./module/ts-require");

  beforeAll(async () => {
    const project = path.join(__dirname, "..");
    await exec(`npm run build --prefix ${project}`, {});
  });

  afterAll(async () => {
    await Promise.all([
      exec(`rm -rf ${pkgPathEsm}/node_modules`, {}),
      exec(`rm -rf ${pkgPathCjs}/node_modules`, {}),
      exec(`rm -rf ${pkgPathTs}/node_modules`, {}),
      exec(`rm -rf ${pkgPathTsRequire}/node_modules`, {}),
    ]);
  });

  it.concurrent("esm", async () => {
    await exec(`npm test --prefix ${pkgPathEsm}`, {});
  });

  it.concurrent("cjs", async () => {
    await exec(`npm test --prefix ${pkgPathCjs}`, {});
  });

  it.concurrent("ts", async () => {
    await exec(`npm test --prefix ${pkgPathTs}`, {});
  });

  it.concurrent("ts-require", async () => {
    await exec(`npm test --prefix ${pkgPathTsRequire}`, {});
  });
});
