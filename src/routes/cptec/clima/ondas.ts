import { get } from "../../../service/api.service";
import { Ondas } from "../../../types/cptec/clima/ondas";

const endpoint = "cptec/v1/ondas/";

export const getBy = (cityCode: number, days?: number) => {
  let url = endpoint + cityCode;
  if (days) url += "/" + days;

  return get<Ondas>(url);
};
