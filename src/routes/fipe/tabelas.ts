import { get } from "../../service/api.service";
import { Tabela } from "../../types/fipe/tabelas";

const endpoint = "/fipe/tabelas/v1/";

export const getAll = () => {
  return get<Tabela[]>(endpoint);
};
