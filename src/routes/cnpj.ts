import { get } from "../service/api.service";
import { CNPJ } from "../types/cnpj";
import { onlyNumbers } from "../utils/format";

const endpoint = "/cnpj/v1/";

const getBy = (cnpj: string) => {
  return get<CNPJ>(endpoint + onlyNumbers(cnpj));
};

export default { getBy };
