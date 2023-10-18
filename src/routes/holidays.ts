import { get } from "../service/api.service";
import { Holiday } from "../types/holidays";

const endpoint = "/feriados/v1/";

export const getBy = (year: string) => {
  return get<Holiday[]>(endpoint + year);
};
