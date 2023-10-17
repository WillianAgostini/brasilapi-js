import { get } from "../service/api.service";
import { CepV2 } from "../types/cep";
import { onlyNumbers } from "../utils";

const endpointV2 = "/cep/v2/";

export const getBy = (cep: string) => {
  return get<CepV2>(endpointV2 + onlyNumbers(cep));
};
