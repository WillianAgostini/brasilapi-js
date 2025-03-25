import { get } from "../../service/api.service";
import { State } from "../../types/ibge/state";

const endpoint = "/ibge/uf/v1/";

const getAll = () => {
  return get<State[]>(endpoint);
};

const getBy = (code: string) => {
  return get<State>(endpoint + code);
};

export default { getAll, getBy };
