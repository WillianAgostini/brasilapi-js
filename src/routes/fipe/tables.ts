import { get } from "../../service/api.service";
import { Tables } from "../../types/fipe/tables";

const endpoint = "/fipe/tabelas/v1/";

export const getAll = () => {
  return get<Tables[]>(endpoint);
};
