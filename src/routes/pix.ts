import { get } from "../service/api.service";
import { Pix } from "../types/pix";

const endpoint = "/pix/v1/participants/";

export const getAll = () => {
  return get<Pix[]>(endpoint);
};
