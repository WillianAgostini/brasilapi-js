import { get } from "../service/api.service";
import { CVM } from "../types/cvm";
import { onlyNumbers } from "../utils/format";

const endpoint = "/cvm/corretoras/v1/";

const getAll = () => {
  return get<CVM[]>(endpoint);
};

const getBy = (cnpj: string) => {
  return get<CVM>(endpoint + onlyNumbers(cnpj));
};

export default { getAll, getBy };
