import { get } from "../../service/api.service";
import { Exchange } from "../../types/exchange/rates";

const endpoint = "/cambio/v1/cotacao";

const getBy = (currency: string, date: string) => {
  const url = `${endpoint}/${currency}/${date}`;
  return get<Exchange>(url);
};

export default { getBy };
