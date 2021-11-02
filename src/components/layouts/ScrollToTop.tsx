import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface ScrollToTopProps {}

const ScrollToTop: FC<ScrollToTopProps> = () => {
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
