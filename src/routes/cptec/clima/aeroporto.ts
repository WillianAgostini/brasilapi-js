import { get } from "../../../service/api.service";
import { Aeroporto } from "../../../types/cptec/clima/aeroporto";

const endpoint = "cptec/v1/clima/aeroporto/";

export const getBy = (icaoCode: string) => {
  return get<Aeroporto>(endpoint + icaoCode);
};
