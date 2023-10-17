import { get } from "../../service/api.service";
import { Marca } from "../../types/fipe/marcas";

const endpoint = "/fipe/marcas/v1/";

export const getBy = (
  tipoVeiculo: "caminhoes" | "carros" | "motos",
  tabela_referencia?: number,
) => {
  let url = endpoint + tipoVeiculo;
  if (tabela_referencia) {
    url += "?tabela_referencia" + tabela_referencia;
  }
  return get<Marca>(url);
};
