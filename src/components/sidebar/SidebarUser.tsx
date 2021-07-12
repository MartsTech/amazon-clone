import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarUserProps {}

const SidebarUser: React.FC<SidebarUserProps> = () => {
  const {
    commonStore: { toggleSidebar },
  } = useStore();

  const router = useRouter();

  return (
    <>
      {false ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="w-12 h-12 rounded-full shadow-md hover:shadow-lg
        transition-all duration-200 transform hover:scale-105
        object-contain cursor-pointer"
          onClick={() => {
            router.push("/profile");
            toggleSidebar();
          }}
          src={"/images/default.jpg"}
          alt="avatar"
          data-tip="My Account"
          data-for="sidebarTooltip"
        />
      ) : (
        <SidebarMenuItem
          Icon={AccountCircleRoundedIcon}
          path="/login"
          tooltip="Login / Register"
        />
      )}
    </>
  );
};

export default SidebarUser;
