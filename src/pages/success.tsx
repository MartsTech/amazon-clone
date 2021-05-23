import SuccessTemplate from "@template/SuccessTemplate";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface SuccessPageProps {}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="description" content="Amazon clone created with Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuccessTemplate />
    </>
  );
};

export default SuccessPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
