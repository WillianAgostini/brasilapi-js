import { get } from "../service/api.service";
import { Pix } from "../types/pix";

const endpoint = "/pix/v1/participants/";

const getAll = () => {
  return get<Pix[]>(endpoint);
};

export default { getAll };
