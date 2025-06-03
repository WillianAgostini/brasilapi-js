import path from "path";
import cp from "child_process";
import util from "util";
import fs from "fs/promises";

const exec = util.promisify(cp.exec);

describe("modules", () => {
  jest.setTimeout(10_000);

  beforeAll(async () => {
    const project = path.join(__dirname, "..");
    await exec(`npm run build --prefix ${project}`, {});
  });

  const assertCode = `
assert.strictEqual(typeof api.bank.getAll, "function");
assert.strictEqual(typeof api.bank.getBy, "function");
assert.strictEqual(typeof api.cep.getBy, "function");
assert.strictEqual(typeof api.cepV1.getBy, "function");
assert.strictEqual(typeof api.cnpj.getBy, "function");
assert.strictEqual(typeof api.cptec.city.getBy, "function");
assert.strictEqual(typeof api.cptec.city.getAll, "function");
assert.strictEqual(typeof api.cptec.weather.airport.getBy, "function");
assert.strictEqual(typeof api.cptec.weather.capital.getAll, "function");
assert.strictEqual(typeof api.cptec.weather.forecast.getBy, "function");
assert.strictEqual(typeof api.cptec.weather.ocean.getBy, "function");
assert.strictEqual(typeof api.cvm.getAll, "function");
assert.strictEqual(typeof api.cvm.getBy, "function");
assert.strictEqual(typeof api.ddd.getBy, "function");
assert.strictEqual(typeof api.fipe.brands.getBy, "function");
assert.strictEqual(typeof api.fipe.price.getBy, "function");
assert.strictEqual(typeof api.fipe.tables.getAll, "function");
assert.strictEqual(typeof api.fipe.vehicles.getBy, "function");
assert.strictEqual(typeof api.holidays.getBy, "function");
assert.strictEqual(typeof api.ibge.country.getBy, "function");
assert.strictEqual(typeof api.ibge.city.getBy, "function");
assert.strictEqual(typeof api.ibge.state.getAll, "function");
assert.strictEqual(typeof api.ibge.state.getBy, "function");
assert.strictEqual(typeof api.isbn.getBy, "function");
assert.strictEqual(typeof api.ncm.getAll, "function");
assert.strictEqual(typeof api.ncm.getBy, "function");
assert.strictEqual(typeof api.pix.getAll, "function");
assert.strictEqual(typeof api.registerBr.getBy, "function");
assert.strictEqual(typeof api.taxes.getAll, "function");
assert.strictEqual(typeof api.taxes.getBy, "function");
`;

  const entryFiles: Record<string, string> = {
    cjs: "index.js",
    cts: "index.ts",
    mjs: "index.js",
    mts: "index.ts",
    ts: "index.ts",
    "ts-require": "index.ts",
  };

  describe.each(["cjs", "cts", "mjs", "mts", "ts", "ts-require"])(
    "modules",
    (type) => {
      const pkgPath = path.join(__dirname, `./module/${type}`);
      const entryFile = path.join(pkgPath, entryFiles[type]);

      let originalContent: string;

      beforeAll(async () => {
        originalContent = await fs.readFile(entryFile, "utf8");
        await fs.appendFile(entryFile, "\n" + assertCode);
      });

      afterAll(async () => {
        await exec(`rimraf ${pkgPath}/node_modules`, {});
        await fs.writeFile(entryFile, originalContent, "utf8");
      });

      it(type, async () => {
        await exec(`npm test --prefix ${pkgPath}`, {});
      });
    },
  );
});
