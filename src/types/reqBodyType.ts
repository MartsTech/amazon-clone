import { productType } from "./productType";

export type reqBodyType = {
  items: { product: productType; count: number }[];
  email: string;
};
