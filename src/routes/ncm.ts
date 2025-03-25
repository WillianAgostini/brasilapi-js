import { get } from "../service/api.service";
import { NCM } from "../types/ncm";

const endpoint = "/ncm/v1/";

const getAll = () => {
  return get<NCM[]>(endpoint);
};

const getBy = (code: string) => {
  return get<NCM>(endpoint + code);
};

const search = (code: string) => {
  const url = endpoint.substring(0, endpoint.length - 1) + "?search=" + code;
  return get<NCM>(url);
};

export default { getAll, getBy, search };
