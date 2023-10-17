import { get } from "../../service/api.service";
import { Municipio } from "../../types/ibge/municipios";

const endpoint = "/ibge/municipios/v1/";

/**
 * @param {"dados-abertos-br" | "gov" | "wikipedia"} [providers] - (Opcional) Os provedores de dados a serem utilizados. Pode ser "dados-abertos-br", "gov" e/ou "wikipedia".
 */
export const getBy = (siglaUF: string, providers?: string) => {
  let url = endpoint + siglaUF;
  if (providers) {
    url += "?providers=" + providers;
  }

  return get<Municipio[]>(url);
};
