import axios from "axios";

const instance = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  headers: {
    "Content-type": "application/json",
  },
});

function get<T>(endpoint: string) {
  return instance.get<T>(endpoint);
}

export { get, instance };
