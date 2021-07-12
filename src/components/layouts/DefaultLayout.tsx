import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { observer } from "mobx-react-lite";
import LoadingBar from "react-top-loading-bar";
import { useStore } from "stores/store";

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const {
    commonStore: { loadingProgress, setLoadingProgress },
  } = useStore();

  return (
    <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col">
      <LoadingBar
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
        height={3}
        color="#f90"
        shadow={true}
      />
      <Sidebar />
      <div className="pl-0 sm:pl-24 w-full max-w-screen-1xl mx-auto">
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Header />
            {children}
          </AnimateSharedLayout>
        </AnimatePresence>
      </div>
      <div className="mt-auto mb-20" />
      <Footer />
    </div>
  );
};

export default observer(DefaultLayout);
