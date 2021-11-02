import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <Head>
      <title>Auth</title>
    </Head>
  );
};

export default Auth;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
