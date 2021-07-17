import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsNotAuthProps {}

const IsNotAuth: React.FC<IsNotAuthProps> = ({ children }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && !loading) {
      if (typeof router.query.next === "string") {
        router.push(router.query.next);
      } else {
        router.push("/");
      }
    }
  }, [session, loading, router]);

  return <>{children}</>;
};

export default IsNotAuth;
