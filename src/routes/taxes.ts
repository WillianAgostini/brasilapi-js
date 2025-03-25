import { get } from "../service/api.service";
import { Taxe } from "../types/taxes";

const endpoint = "/taxas/v1/";

const getAll = () => {
  return get<Taxe[]>(endpoint);
};

const getBy = (sigla: string) => {
  return get<Taxe>(endpoint + sigla);
};

export default { getAll, getBy };
