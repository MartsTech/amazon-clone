import HomePage from "features/home/HomePage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useStore } from "stores/store";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { totalProducts, loadProducts } = useStore().productStore;

  useEffect(() => {
    if (totalProducts == 0) {
      loadProducts();
    }
  }, [totalProducts, loadProducts]);

  return (
    <>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <HomePage />
    </>
  );
};

export default observer(Home);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
