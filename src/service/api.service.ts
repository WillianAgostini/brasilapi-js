import axios from "axios";

export const instance = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  headers: {
    "Content-type": "application/json",
  },
});

export function get<T>(endpoint: string) {
  return instance.get<T>(endpoint);
}
