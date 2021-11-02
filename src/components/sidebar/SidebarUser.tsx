import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarUserProps {}

const SidebarUser: React.FC<SidebarUserProps> = () => {
  const [session] = useSession();
  const { toggleSidebar } = useStore().commonStore;

  const router = useRouter();

  return (
    <>
      {session?.user ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user.image || "/images/default.jpg"}
          onClick={() => {
            router.push("/auth/profile");
            toggleSidebar();
          }}
          alt="avatar"
          data-tip="My Account"
          data-for="sidebarTooltip"
          className="w-10 h-10 rounded-full shadow-md hover:shadow-lg
          transition-all duration-200 transform hover:scale-105
          object-contain cursor-pointer"
        />
      ) : (
        <SidebarMenuItem
          Icon={AccountCircleRoundedIcon}
          paths={["/auth/login", "/auth/register", "/auth/password-reset"]}
          tooltip="Login / Register"
        />
      )}
    </>
  );
};

export default SidebarUser;
