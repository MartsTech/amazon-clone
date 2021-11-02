import IsAuth from "features/auth/IsAuth";
import ProfilePage from "features/user/ProfilePage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { FC, useEffect } from "react";
import { useStore } from "stores/store";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { userDetails, loadUserDetails } = useStore().userStore;
  const [session] = useSession();

  useEffect(() => {
    if (!userDetails) {
      loadUserDetails(session?.user?.email as string);
    }
  }, [session?.user?.email, userDetails, loadUserDetails]);

  return (
    <IsAuth>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfilePage />
    </IsAuth>
  );
};

export default observer(Profile);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
