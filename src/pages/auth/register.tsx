import IsNotAuth from "features/auth/IsNotAuth";
import RegisterPage from "features/user/RegisterPage";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, getSession } from "next-auth/client";

interface RegisterProps {
  providers: Record<string, ClientSafeProvider>;
}

const Register: React.FC<RegisterProps> = ({ providers }) => {
  return (
    <IsNotAuth>
      <RegisterPage providers={providers} />
    </IsNotAuth>
  );
};

export default Register;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const providers = await getProviders();

  return {
    props: { session, providers },
  };
};
