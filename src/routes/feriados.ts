import { get } from "../service/api.service";
import { Feriados } from "../types/feriados";

const endpoint = "/feriados/v1/";

export const getBy = (year: string) => {
  return get<Feriados[]>(endpoint + year);
};
