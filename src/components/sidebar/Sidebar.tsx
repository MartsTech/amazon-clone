import { observer } from "mobx-react-lite";
import dynamic from "next/dynamic";
import { useStore } from "stores/store";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { sidebarActive } = useStore().commonStore;

  return (
    <div
      className={`w-20 sm:w-24 h-screen fixed z-50 top-0 left-0
      shadow-lg bg-white flex flex-col justify-between
      items-center py-6 sm:py-12 transition-all duration-200
      transform -translate-x-20 sm:translate-x-0
      ${sidebarActive && "translate-x-0"}`}
    >
      <SidebarLogo />
      <SidebarMenu />
      <SidebarUser />
      <ReactTooltip
        place="right"
        id="sidebarTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
        className="!rounded-lg whitespace-nowrap"
      />
    </div>
  );
};

export default observer(Sidebar);
