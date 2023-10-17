import { get } from "../../service/api.service";
import { Uf } from "../../types/ibge/uf";

const endpoint = "/ibge/uf/v1/";

export const getAll = () => {
  return get<Uf[]>(endpoint);
};

export const getBy = (code: string) => {
  return get<Uf>(endpoint + code);
};
