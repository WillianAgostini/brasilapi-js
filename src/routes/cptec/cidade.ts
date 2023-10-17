import { get } from "../../service/api.service";
import { Cidade } from "../../types/cptec/cidade";

const endpointCidade = "/cptec/v1/cidade/";

export const getAll = () => {
  return get<Cidade[]>(endpointCidade);
};

export const getBy = (cityName: string) => {
  return get<Cidade>(endpointCidade + cityName);
};
