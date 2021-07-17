import axios, { AxiosResponse } from "axios";
import { Product } from "types/product";

const apiUrl = "https://fakestoreapi.com";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Products = {
  list: () => requests.get<Product[]>(`${apiUrl}/products`),
  details: (id: number) => requests.get<Product>(`${apiUrl}/products/${id}`),
};

const agent = {
  Products,
};

export default agent;
