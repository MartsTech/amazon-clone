import IsNotAuth from "features/auth/IsNotAuth";
import RegisterPage from "features/user/RegisterPage";
import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders } from "next-auth/client";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
