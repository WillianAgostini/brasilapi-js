import axios from "axios";

const instance = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  headers: {
    "Content-type": "application/json",
  },
});

export function get<T>(url: string) {
  return instance.get<T>(url);
}
