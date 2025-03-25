import { get } from "../service/api.service";
import { CepV1 } from "../types/cep";
import { onlyNumbers } from "../utils/format";

const endpointV1 = "/cep/v1/";

const getBy = (cep: string) => {
  return get<CepV1>(endpointV1 + onlyNumbers(cep));
};

export default { getBy };
