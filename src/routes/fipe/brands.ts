import { get } from "../../service/api.service";
import { Brand } from "../../types/fipe/brands";

const endpoint = "/fipe/marcas/v1/";

export const getBy = (
  typeVehicle: "caminhoes" | "carros" | "motos",
  reference_table?: number,
) => {
  let url = endpoint + typeVehicle;
  if (reference_table) {
    url += "?tabela_referencia" + reference_table;
  }
  return get<Brand>(url);
};
