import { get } from "../../../service/api.service";
import { Airport } from "../../../types/cptec/weather/airport";

const endpoint = "cptec/v1/clima/aeroporto/";

const getBy = (icaoCode: string) => {
  return get<Airport>(endpoint + icaoCode);
};

export default { getBy };
