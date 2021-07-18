import IsNotAuth from "features/auth/IsNotAuth";
import LoginPage from "features/user/LoginPage";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, getSession } from "next-auth/client";

interface LoginProps {
  providers: Record<string, ClientSafeProvider>;
}

const Login: React.FC<LoginProps> = ({ providers }) => {
  return (
    <IsNotAuth>
      <LoginPage providers={providers} />
    </IsNotAuth>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const providers = await getProviders();

  return {
    props: { session, providers },
  };
};
