import Button from "components/buttons/Button";
import Image from "next/image";
import { useRouter } from "next/router";

interface BookmarkEmptyProps {}

const BookmarkEmpty: React.FC<BookmarkEmptyProps> = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col md:flex-row md:space-x-10 
    space-y-10 md:space-y-0 p-6 sm:p-12"
    >
      <div className="flex-[60%] relative p-32">
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/emptyBookmarks.svg"
          alt="empty bookmarks"
          className="py-4 px-8 absolute bg-gray-200"
        />
      </div>
      <div className="bg-white rounded-lg shadow-sm items-start p-6 md:p-8 text-xl">
        <h4 className="text-2xl mb-2 font-semibold">Its empty here.</h4>
        <p className="mb-12">
          Somethings catching your eye? Add your favorite items to Bookmarks,
          and check them out anytime you wish.
        </p>
        <div className="mt-4 text-xl">
          <Button onClick={() => router.push("/")} variant="primary">
            Go Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkEmpty;
