import { get } from "../service/api.service";
import { DDD } from "../types/ddd";

const endpoint = "/ddd/v1/";

export const getBy = (ddd: string) => {
  return get<DDD>(endpoint + ddd);
};
