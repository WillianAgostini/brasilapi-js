import * as bank from "./routes/bank";
import * as cep from "./routes/cep";
import * as cepV1 from "./routes/cepV1";
import * as cnpj from "./routes/cnpj";
import * as cvm from "./routes/cvm";
import * as ddd from "./routes/ddd";
import * as holidays from "./routes/holidays";
import * as cptec from "./routes/cptec";
import * as fipe from "./routes/fipe";
import * as ibge from "./routes/ibge";
import * as isbn from "./routes/isbn";
import * as ncm from "./routes/ncm";
import * as pix from "./routes/pix";
import * as registerBr from "./routes/registerBr";
import * as taxes from "./routes/taxes";
import * as exchange from "./routes/exchange";
import * as request from "./service/api.service";

const api = {
  request,
  bank,
  cep,
  cepV1,
  cnpj,
  cvm,
  cptec,
  ddd,
  holidays,
  fipe,
  ibge,
  isbn,
  ncm,
  pix,
  registerBr,
  taxes,
  exchange,
};

export {
  api as default,
  request,
  bank,
  cep,
  cepV1,
  cnpj,
  cvm,
  cptec,
  ddd,
  holidays,
  fipe,
  ibge,
  isbn,
  ncm,
  pix,
  registerBr,
  taxes,
  exchange,
};
