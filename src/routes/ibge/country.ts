import { get } from "../../service/api.service";
import { Country } from "../../types/ibge/country";

const endpoint = "/ibge/municipios/v1/";

const getBy = (
  siglaUF: string,
  providers?: "dados-abertos-br" | "gov" | "wikipedia",
) => {
  let url = endpoint + siglaUF;
  if (providers) {
    url += "?providers=" + providers;
  }

  return get<Country[]>(url);
};

export default { getBy };
