const assert = require("assert");
const api = require("brasilapi-js");

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
assert.strictEqual(typeof api.ibge.state.getAll, "function");
assert.strictEqual(typeof api.ibge.state.getBy, "function");
assert.strictEqual(typeof api.isbn.getBy, "function");
assert.strictEqual(typeof api.ncm.getAll, "function");
assert.strictEqual(typeof api.ncm.getBy, "function");
assert.strictEqual(typeof api.pix.getAll, "function");
assert.strictEqual(typeof api.registerBr.getBy, "function");
assert.strictEqual(typeof api.taxes.getAll, "function");
assert.strictEqual(typeof api.taxes.getBy, "function");
assert.strictEqual(typeof api.exchange.currency.getAll, "function");
assert.strictEqual(typeof api.exchange.rates.getBy, "function");
