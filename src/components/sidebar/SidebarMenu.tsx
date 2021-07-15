import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import SidebarMenuItem from "./SidebarMenuItem";

interface SidebarMenuProps {}

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
  const { cartTotalItems } = useStore().cartStore;
  const { totalBookmarks } = useStore().bookmarkStore;

  return (
    <div className="flex flex-col">
      <SidebarMenuItem Icon={HomeRoundedIcon} path="/" tooltip="Home" />
      <SidebarMenuItem
        Icon={ShoppingCartRoundedIcon}
        path="/cart"
        tooltip="Cart"
        count={cartTotalItems}
      />
      <SidebarMenuItem
        Icon={BookmarksRoundedIcon}
        path="/bookmarks"
        tooltip="Bookmarks"
        count={totalBookmarks}
      />
      <SidebarMenuItem
        Icon={WatchLaterRoundedIcon}
        path="/orders"
        tooltip="Orders"
      />
    </div>
  );
};

export default observer(SidebarMenu);
