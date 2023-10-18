import { get } from "../service/api.service";
import { Taxe } from "../types/taxes";

const endpoint = "/taxas/v1/";

export const getAll = () => {
  return get<Taxe[]>(endpoint);
};

export const getBy = (sigla: string) => {
  return get<Taxe>(endpoint + sigla);
};
