import { get } from "../service/api.service";
import { NCM } from "../types/ncm";

const endpoint = "/ncm/v1/";

export const getAll = () => {
  return get<NCM[]>(endpoint);
};

export const getBy = (code: string) => {
  return get<NCM>(endpoint + code);
};

export const search = (code: string) => {
  const url = endpoint.substring(0, endpoint.length - 1) + "?search=" + code;
  return get<NCM>(url);
};
