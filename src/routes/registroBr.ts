import { get } from "../service/api.service";
import { RegistroBr } from "../types/registroBr";

const endpoint = "/registrobr/v1/";

export const getBy = (domain: string) => {
  return get<RegistroBr>(endpoint + domain);
};
