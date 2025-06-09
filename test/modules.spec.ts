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

  const fileExt: Record<string, string> = {
    cjs: "js",
    cts: "ts",
    mjs: "js",
    mts: "ts",
    ts: "ts",
    "ts-require": "ts",
  };

  const importCode: Record<string, string> = {
    cjs: 'const assert = require("assert");\nconst api = require("brasilapi-js");',
    cts: 'import assert from "assert";\nimport api from "brasilapi-js";',
    mjs: 'import assert from "assert";\nimport api from "brasilapi-js";',
    mts: 'import assert from "assert";\nimport api from "brasilapi-js";',
    ts: 'import assert from "assert";\nimport api from "brasilapi-js";',
    "ts-require":
      'const assert = require("assert");\nconst api = require("brasilapi-js");',
  };

  const runCommand: Record<string, string> = {
    cjs: "node assert.js",
    cts: "npx tsx assert.ts",
    mjs: "node assert.js",
    mts: "npx tsx assert.ts",
    ts: "npx tsx assert.ts",
    "ts-require": "npx tsx assert.ts",
  };

  describe.each(["cjs", "cts", "mjs", "mts", "ts", "ts-require"])(
    "modules",
    (type) => {
      const pkgPath = path.join(__dirname, `./module/${type}`);
      const testFile = path.join(pkgPath, `assert.${fileExt[type]}`);

      beforeAll(async () => {
        await fs.writeFile(testFile, `${importCode[type]}\n${assertCode}`);
        await exec("npm i --no-save --no-package-lock", { cwd: pkgPath });
      });

      afterAll(async () => {
        await exec("rimraf node_modules", { cwd: pkgPath });
        await fs.rm(testFile);
      });

      it(type, async () => {
        await exec(runCommand[type], { cwd: pkgPath });
      });
    },
  );
});
