import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface PasswordResetProps {}

const PasswordReset: React.FC<PasswordResetProps> = () => {
  return (
    <Head>
      <title>Password Reset</title>
    </Head>
  );
};

export default PasswordReset;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
