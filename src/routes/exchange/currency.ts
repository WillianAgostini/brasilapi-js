import { get } from "../../service/api.service";
import { Currency } from "../../types/exchange/currency";

const endpoint = "/cambio/v1/moedas";

const getAll = () => {
  return get<Currency>(endpoint);
};

export default { getAll };
