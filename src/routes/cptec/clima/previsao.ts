import { get } from "../../../service/api.service";
import { Previsao } from "../../../types/cptec/clima/previsao";

const endpoint = "cptec/v1/clima/previsao/";

export const getBy = (cityCode: number, days?: number) => {
  let url = endpoint + cityCode;
  if (days) url += "/" + days;

  return get<Previsao>(url);
};
