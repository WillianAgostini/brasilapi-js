import { get } from "../../../service/api.service";
import { Oceans } from "../../../types/cptec/weather/oceans";

const endpoint = "cptec/v1/ondas/";

export const getBy = (cityCode: number, days?: number) => {
  let url = endpoint + cityCode;
  if (days) url += "/" + days;

  return get<Oceans>(url);
};
