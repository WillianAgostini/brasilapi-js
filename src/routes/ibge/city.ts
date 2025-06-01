import { get } from "../../service/api.service";
import { City } from "../../types/ibge/city";

const endpoint = "/ibge/municipios/v1/";

export const getBy = (
  siglaUF: string,
  providers?: "dados-abertos-br" | "gov" | "wikipedia",
) => {
  let url = endpoint + siglaUF;
  if (providers) {
    url += "?providers=" + providers;
  }

  return get<City[]>(url);
};
