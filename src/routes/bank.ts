import { get } from "../service/api.service";
import { Bank } from "../types/bank";

const endpoint = "/banks/v1/";

export const getAll = () => {
  return get<Bank[]>(endpoint);
};

export const getBy = (code: number) => {
  return get<Bank>(endpoint + code);
};
