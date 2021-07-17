import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Head>
      <title>Profile</title>
    </Head>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
