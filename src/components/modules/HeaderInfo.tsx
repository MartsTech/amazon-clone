import Badge from "@element/Badge";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { selectItemsCount } from "@slice/basketSlice";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

interface HeaderInfoProps {}

const HeaderInfo: React.FC<HeaderInfoProps> = ({}) => {
  const [session] = useSession();
  const itemsCount = useSelector(selectItemsCount);
  const router = useRouter();

  return (
    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
      <div onClick={() => (!session ? signIn() : signOut())} className="link">
        <p>{session?.user ? session.user.name : "Sign In"}</p>
        <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>

      <div className="link">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">& Orders</p>
      </div>

      <div
        onClick={() => router.push("/checkout")}
        className="relative link flex items-center"
      >
        <Badge count={itemsCount} />
        <ShoppingCartIcon className="h-10" />
        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
          Basket
        </p>
      </div>
    </div>
  );
};

export default HeaderInfo;
