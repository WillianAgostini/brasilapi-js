import * as bank from "./routes/bank";
import * as cep from "./routes/cep";
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
import * as request from "./service/api.service";

export {
  /** Instância para realizar requisições http */
  request,

  /** Informações sobre sistema bancário */
  bank,

  /** Informações referentes a CEPs */
  cep,

  /** Busca dados de empresas por CNPJ */
  cnpj,

  /** Informações referentes a Corretoras ativas listadas na CVM */
  cvm,

  /** Abstração e normalização de dados provenientes da CPTEC. Fonte oficial: CPTEC/INPE */
  cptec,

  /** Informações relacionadas a DDDs */
  ddd,

  /** Informações sobre feriados nacionais */
  holidays,

  /** Informações sobre Preço Médio de Veículos fornecido pela FIPE (Fundação Instituto de Pesquisas Econômicas) */
  fipe,

  /** Informações sobre estados Provenientes do IBGE */
  ibge,

  /** Informações sobre livros publicados no Brasil (prefixo 65 ou 85) a partir do ISBN, um sistema internacional de identificação de livros que utiliza números para classificá-los por título, autor, país, editora e edição. */
  isbn,

  /** Informações referentes a NCMs */
  ncm,

  /** Retorna informações de todos os participantes do PIX no dia atual ou anterior */
  pix,

  /** Avalia um dominio no registro.br */
  registerBr,

  /** Taxas de juros e índices oficiais */
  taxes,
};
