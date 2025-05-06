import { get } from "../../service/api.service";
import { City } from "../../types/cptec/city";

const endpointCity = "/cptec/v1/cidade/";

export const getAll = () => {
  return get<City[]>(endpointCity);
};

export const getBy = (cityName: string) => {
  return get<City>(endpointCity + cityName);
};
