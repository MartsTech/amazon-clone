import { useRouter } from "next/router";
import { useEffect } from "react";

interface RouteChangeProps {}

const RouteChange: React.FC<RouteChangeProps> = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default RouteChange;
