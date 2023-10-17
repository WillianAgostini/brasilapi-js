import { get } from "../service/api.service";
import { CNPJ } from "../types/cnpj";
import { onlyNumbers } from "../utils";

const endpoint = "/cnpj/v1/";

export const getBy = (cnpj: string) => {
  return get<CNPJ>(endpoint + onlyNumbers(cnpj));
};
