import { get } from "../../service/api.service";
import { State } from "../../types/ibge/state";

const endpoint = "/ibge/uf/v1/";

export const getAll = () => {
  return get<State[]>(endpoint);
};

export const getBy = (code: string) => {
  return get<State>(endpoint + code);
};
