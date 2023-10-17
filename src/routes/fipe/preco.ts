import { get } from "../../service/api.service";
import { Preco } from "../../types/fipe/preco";

const endpoint = "/fipe/preco/v1/";

export const getBy = (codigoFipe: string, tabela_referencia?: number) => {
  let url = endpoint + codigoFipe;
  if (tabela_referencia) {
    url += "?tabela_referencia" + tabela_referencia;
  }
  return get<Preco>(url);
};
