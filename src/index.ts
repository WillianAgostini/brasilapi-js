import * as bank from "./routes/bank";
import * as cep from "./routes/cep";
import * as cnpj from "./routes/cnpj";
import * as cvm from "./routes/cvm";
import * as ddd from "./routes/ddd";
import * as feriados from "./routes/feriados";
// import * as cptec from "./routes/cptec";
// import * as fipe from "./routes/fipe";
// import * as ibge from "./routes/ibge";

export default {
  /** Informações sobre sistema bancário */
  bank,

  /** Informações referentes a CEPs */
  cep,

  /** Busca dados de empresas por CNPJ */
  cnpj,

  /** Informações referentes a Corretoras ativas listadas na CVM */
  cvm,

  // /** Abstração e normalização de dados provenientes da CPTEC. Fonte oficial: CPTEC/INPE */
  // cptec,

  /** Informações relacionadas a DDDs */
  ddd,

  /** Informações sobre feriados nacionais */
  feriados,

  // /** Informações sobre Preço Médio de Veículos fornecido pela FIPE (Fundação Instituto de Pesquisas Econômicas) */
  // fipe,

  // /** Informações sobre estados Provenientes do IBGE */
  // ibge,
};
