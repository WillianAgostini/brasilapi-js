import { get } from "../service/api.service";
import { RegisterBr } from "../types/registerBr";

const endpoint = "/registrobr/v1/";

const getBy = (domain: string) => {
  return get<RegisterBr>(endpoint + domain);
};

export default { getBy };
