import Fuse from "fuse.js";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { Product } from "types/product";

interface HeaderResultProps {
  result: Fuse.FuseResult<Product>;
}

const HeaderResult: React.FC<HeaderResultProps> = ({
  result: {
    item: { id, image, title, description },
  },
}) => {
  const { setSearchQuery } = useStore().searchStore;
  const { loadProduct } = useStore().productStore;
  const router = useRouter();

  return (
    <div
      onClick={async () => {
        setSearchQuery("");
        await loadProduct(id);
        router.push(`/product/${id}`);
      }}
      className="flex items-center transition-colors duration-200
    cursor-pointer hover:bg-gray-100"
    >
      <div
        className="bg-white flex items-center justify-center"
        style={{ flex: " 0 0 4.5rem" }}
      >
        <Image
          height="50%"
          width="50%"
          objectFit="contain"
          src={image}
          alt="product"
          className="p-3"
        />
      </div>
      <span className="p-4 pl-2 w-4/5">
        <p className="flex-grow text-sm font-medium overflow-hidden line-clamp-1">
          {title}
        </p>
        <small className="text-sm w-full opacity-70 line-clamp-1">
          {description}
        </small>
      </span>
    </div>
  );
};

export default observer(HeaderResult);
