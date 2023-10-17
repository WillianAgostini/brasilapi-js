import { get } from "../service/api.service";
import { CVM } from "../types/cvm";
import { onlyNumbers } from "../utils/format";

const endpoint = "/cvm/corretoras/v1/";

export const getAll = () => {
  return get<CVM[]>(endpoint);
};

export const getBy = (cnpj: string) => {
  return get<CVM>(endpoint + onlyNumbers(cnpj));
};
