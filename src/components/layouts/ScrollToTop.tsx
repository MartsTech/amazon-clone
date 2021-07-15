import { useRouter } from "next/router";
import { useEffect } from "react";

interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
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

export default ScrollToTop;
