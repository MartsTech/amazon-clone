import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface IsAuthProps {}

const IsAuth: FC<IsAuthProps> = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.replace(`/auth/login?next${router.pathname}`);
    }
  }, [session, loading, router]);

  return <>{children}</>;
};

export default IsAuth;
