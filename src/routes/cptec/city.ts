import { get } from "../../service/api.service";
import { City } from "../../types/cptec/city";

const endpointCity = "/cptec/v1/cidade/";

const getAll = () => {
  return get<City[]>(endpointCity);
};

const getBy = (cityName: string) => {
  return get<City>(endpointCity + cityName);
};

export default { getAll, getBy };
