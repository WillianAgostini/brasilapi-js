import { get } from "../../service/api.service";
import { Price } from "../../types/fipe/price";

const endpoint = "/fipe/preco/v1/";

export const getBy = (codigoFipe: string, tabela_referencia?: number) => {
  let url = endpoint + codigoFipe;
  if (tabela_referencia) {
    url += "?tabela_referencia" + tabela_referencia;
  }
  return get<Price>(url);
};
