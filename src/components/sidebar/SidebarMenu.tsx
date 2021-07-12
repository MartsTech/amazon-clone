import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarMenuProps {}

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
  return (
    <div className="flex flex-col">
      <SidebarMenuItem Icon={HomeRoundedIcon} path="/" tooltip="Home" />
      <SidebarMenuItem
        Icon={ShoppingCartRoundedIcon}
        path="/cart"
        tooltip="Cart"
        count={0}
      />
      <SidebarMenuItem
        Icon={BookmarksRoundedIcon}
        path="/bookmarks"
        tooltip="Bookmarks"
        count={0}
      />
      <SidebarMenuItem
        Icon={WatchLaterRoundedIcon}
        path="/orders"
        tooltip="Orders"
      />
    </div>
  );
};

export default SidebarMenu;
