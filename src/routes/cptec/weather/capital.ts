import { get } from "../../../service/api.service";
import { Capital } from "../../../types/cptec/weather/capital";

const endpoint = "cptec/v1/clima/capital/";

export const getAll = () => {
  return get<Capital[]>(endpoint);
};
