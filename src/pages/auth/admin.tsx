import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  return (
    <Head>
      <title>Admin</title>
    </Head>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
