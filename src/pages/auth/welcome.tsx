import IsAuth from "features/auth/IsAuth";
import WelcomePage from "features/user/WelcomePage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <IsAuth>
      <Head>
        <title>Welcome</title>
      </Head>
      <WelcomePage />
    </IsAuth>
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
