import { get } from "../../../service/api.service";
import { Forecast } from "../../../types/cptec/weather/forecast";

const endpoint = "cptec/v1/clima/previsao/";

export const getBy = (cityCode: number, days?: number) => {
  let url = endpoint + cityCode;
  if (days) url += "/" + days;

  return get<Forecast>(url);
};
