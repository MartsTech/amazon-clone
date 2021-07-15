import axios, { AxiosResponse } from "axios";
import { Product } from "types/product";

axios.defaults.baseURL = "https://fakestoreapi.com";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Products = {
  list: () => requests.get<Product[]>("/products"),
};

const agent = {
  Products,
};

export default agent;
