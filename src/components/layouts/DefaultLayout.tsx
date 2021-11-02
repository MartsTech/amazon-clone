import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div
      className="w-screen min-h-screen relative 
      bg-[#fafafa] flex flex-col"
    >
      <Sidebar />
      <div
        className="sm:pl-24 w-full max-w-screen-1xl 
        mx-auto flex-grow flex flex-col"
      >
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

export default DefaultLayout;
