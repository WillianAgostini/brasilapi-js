import bank from "./routes/bank";
import cep from "./routes/cep";
import cepV1 from "./routes/cepV1";
import cnpj from "./routes/cnpj";
import cvm from "./routes/cvm";
import ddd from "./routes/ddd";
import holidays from "./routes/holidays";
import cptec from "./routes/cptec";
import fipe from "./routes/fipe";
import ibge from "./routes/ibge";
import isbn from "./routes/isbn";
import ncm from "./routes/ncm";
import pix from "./routes/pix";
import registerBr from "./routes/registerBr";
import taxes from "./routes/taxes";
import exchange from "./routes/exchange";
import * as request from "./service/api.service";

export {
  /** Instância para realizar requisições http */
  request,

  /** Informações sobre sistema bancário */
  bank,

  /** Informações referentes a CEPs */
  cep,

  /** Informações referentes a CEPs V1 */
  cepV1,

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

  /** Informações referentes ao Cambio */
  exchange,
};
