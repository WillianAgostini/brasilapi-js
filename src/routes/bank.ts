import { get } from "../service/api.service";
import { Bank } from "../types/bank";

const endpoint = "/banks/v1/";

const getAll = () => {
  return get<Bank[]>(endpoint);
};

const getBy = (code: number) => {
  return get<Bank>(endpoint + code);
};

export default { getAll, getBy };
