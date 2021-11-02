import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "stores/store";

interface SidebarMenuItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  paths: string[];
  tooltip: string;
  count?: number;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  Icon,
  paths,
  tooltip,
  count,
}) => {
  const { toggleSidebar } = useStore().commonStore;

  const router = useRouter();
  const active = paths.some((path) => path === router.route);

  return (
    <Link href={paths[0]} passHref>
      <div
        className="my-4 relative cursor-pointer"
        data-tip={tooltip}
        data-for="sidebarTooltip"
        onClick={toggleSidebar}
      >
        <Icon
          className={`!text-4xl !transition-all !duration-200
          transform scale-90 hover:scale-105 ${
            active
              ? "fill-[#1a1a2c] scale-100"
              : "!fill-[transparent] stroke-1 stroke-[#1a1a2c]"
          }`}
        />
        {typeof count != "undefined" && (
          <span
            suppressHydrationWarning
            className="absolute pt-[0.15rem] text-xs text-center
            w-5 h-5 bg-[#f90] text-white font-bold
            left-6 bottom-5 rounded-full"
          >
            {count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
