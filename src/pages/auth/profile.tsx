import IsAuth from "features/auth/IsAuth";
import ProfilePage from "features/user/ProfilePage";
import WelcomePage from "features/user/WelcomePage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useStore } from "stores/store";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { userDetails, loadUserDetails } = useStore().userStore;
  const { appLoading } = useStore().commonStore;
  const [session] = useSession();

  useEffect(() => {
    if (!userDetails) {
      loadUserDetails(session?.user?.email as string);
    }
  }, [session?.user?.email, userDetails, loadUserDetails]);

  if (!userDetails && !appLoading) {
    return (
      <IsAuth>
        <Head>
          <title>Welcome</title>
        </Head>
        <WelcomePage />
      </IsAuth>
    );
  }

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
