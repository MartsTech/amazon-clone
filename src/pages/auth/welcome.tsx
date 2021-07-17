import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <Head>
      <title>Welcome</title>
    </Head>
  );
};

export default Welcome;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
