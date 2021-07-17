import AdminPage from "features/auth/admin/AdminPage";
import IsAuth from "features/auth/IsAuth";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  return (
    <IsAuth>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminPage />
    </IsAuth>
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
