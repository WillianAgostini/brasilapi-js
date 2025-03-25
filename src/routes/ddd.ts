import { get } from "../service/api.service";
import { DDD } from "../types/ddd";

const endpoint = "/ddd/v1/";

const getBy = (ddd: string) => {
  return get<DDD>(endpoint + ddd);
};

export default { getBy };
