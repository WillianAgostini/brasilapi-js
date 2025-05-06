import { get } from "../service/api.service";
import { ISBN } from "../types/isbn";

const endpoint = "/isbn/v1/";

export const getBy = (
  isbn: string,
  provider?: "cbl" | "mercado-editorial" | "open-library" | "google-books",
) => {
  let url = endpoint + isbn;
  if (provider) {
    url += "?provider=" + provider;
  }
  return get<ISBN>(url);
};
