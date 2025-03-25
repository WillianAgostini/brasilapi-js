import { get } from "../service/api.service";
import { CepV2 } from "../types/cep";
import { onlyNumbers } from "../utils/format";

const endpointV2 = "/cep/v2/";

const getBy = (cep: string) => {
  return get<CepV2>(endpointV2 + onlyNumbers(cep));
};

export default { getBy };
