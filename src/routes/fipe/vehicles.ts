import { get } from "../../service/api.service";
import { VehicleModel } from "../../types/fipe/model";
import { VehicleType } from "../../types/fipe/vehicle";

const endpoint = "/fipe/tabelas/v1/";

export const getBy = (
  vehicleType: VehicleType,
  brandCode: number,
  tabela_referencia?: number,
) => {
  let url = `${endpoint}/${vehicleType}/${brandCode}`;
  if (tabela_referencia) {
    url += "?tabela_referencia" + tabela_referencia;
  }
  return get<VehicleModel[]>(url);
};
