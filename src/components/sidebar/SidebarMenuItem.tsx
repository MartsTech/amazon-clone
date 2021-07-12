import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "stores/store";

interface SidebarMenuItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path: string;
  tooltip: string;
  count?: number;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  Icon,
  path,
  tooltip,
  count,
}) => {
  const {
    commonStore: { toggleSidebar },
  } = useStore();

  const router = useRouter();
  const active = router.route === path;

  return (
    <Link href={path} passHref>
      <div
        className="relative my-4 cursor-pointer"
        data-tip={tooltip}
        data-for="sidebarTooltip"
        onClick={toggleSidebar}
      >
        <Icon
          className={`!text-4xl !transition-all !duration-200
          transform scale-90 hover:scale-105 ${
            active
              ? "fill-[#1a1a2c]"
              : "!fill-[transparent] stroke-1 stroke-[#1a1a2c]"
          }`}
        />
        {typeof count != "undefined" && (
          <span
            className="absolute pt-[0.15rem] text-xs text-center w-5 h-5
      bg-[#f90] font-bold text-white rounded-full left-6 bottom-5"
          >
            {count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
