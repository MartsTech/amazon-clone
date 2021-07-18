import ProductPage from "features/product/details/ProductPage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useStore } from "stores/store";
import { useGetIntId } from "utils/useGetIntId";

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const { totalProducts, selectedProduct, loadProduct } =
    useStore().productStore;
  const id = useGetIntId();

  useEffect(() => {
    if (totalProducts == 0) {
      loadProduct(id);
    }
  }, [totalProducts, loadProduct, id]);

  return (
    <>
      <Head>
        <title>{selectedProduct?.title}</title>
      </Head>
      <ProductPage />
    </>
  );
};

export default observer(Product);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};
