import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { useStore } from "stores/store";
import ScrollToTop from "./ScrollToTop";

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { appLoaded } = useStore().commonStore;
  const loadingBar = useRef<any>(null);

  useEffect(() => {
    if (!appLoaded) {
      loadingBar.current?.continuousStart();
    } else {
      loadingBar.current.complete();
    }
  }, [appLoaded]);

  return (
    <>
      <ScrollToTop />
      <ToastContainer position="bottom-right" hideProgressBar />
      <LoadingBar ref={loadingBar} height={3} color="#f90" shadow={true} />
      {children}
    </>
  );
};

export default observer(AppLayout);
