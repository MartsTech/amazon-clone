import ProductFeed from "@section/ProductFeed";
import HomeTemplate from "@template/HomeTemplate";
import { productType } from "@type/productType";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface HomeProps {
  products: productType[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon clone created with Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate ProductFeed={<ProductFeed products={products} />} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
};
