import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsAuthProps {}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.replace("/auth/login?next" + router.pathname);
    }
  }, [session, loading, router]);

  return <>{children}</>;
};

export default IsAuth;
