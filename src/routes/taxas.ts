import { get } from "../service/api.service";
import { Taxa } from "../types/taxas";

const endpoint = "/taxas/v1/";

export const getAll = () => {
  return get<Taxa[]>(endpoint);
};

export const getBy = (sigla: string) => {
  return get<Taxa>(endpoint + sigla);
};
