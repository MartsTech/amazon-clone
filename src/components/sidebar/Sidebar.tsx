import { observer } from "mobx-react-lite";
import ReactTooltip from "react-tooltip";
import { useStore } from "stores/store";
import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const {
    commonStore: { sidebarActive, toggleSidebar },
  } = useStore();

  return (
    <div
      className={`h-screen w-20 sm:w-24 fixed z-50 top-0 left-0
      shadow-lg bg-white flex flex-col items-center py-6
      sm:py-12 justify-between transition-all duration-200
      transform -translate-x-20 sm:translate-x-0
      ${sidebarActive && "translate-x-0"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`z-20 transition-all duration-200 transform translate-x-20 
        sm:translate-x-0 w-10 sm:w-8 p-2 sm:p-0 rounded-full bg-white
        shadow-sm sm:shadow-none ${
          sidebarActive && "!translate-x-0 !shadow-none"
        }`}
        onClick={toggleSidebar}
        src="/icons/icon.svg"
        alt="icon"
      />
      <SidebarMenu />
      <SidebarUser />
      <ReactTooltip
        place="right"
        id="sidebarTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
        className="!rounded-lg shadow-md"
      />
    </div>
  );
};

export default observer(Sidebar);
