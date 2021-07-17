import Button from "components/buttons/Button";
import Image from "next/image";
import { useRouter } from "next/router";

interface CartEmptyProps {}

const CartEmpty: React.FC<CartEmptyProps> = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col-reverse md:flex-row 
          md:space-x-10"
    >
      <div className="flex flex-col mt-12 md:mt-0 flex-[60%] relative">
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/emptyCart.svg"
          alt="empty cart"
          className="py-4 px-8 absolute"
        />
      </div>
      <div className="bg-white rounded-lg shadow-sm items-start p-6 md:p-8">
        <h4 className="text-2xl mb-4">Your cart feels lonely.</h4>
        <p className="mb-12">
          Your shopping cart lives to serve. Give it purpose - fill it with
          books, electronicts, videos, etc. and make it happy.
        </p>
        <div className="mt-4">
          <Button onClick={() => router.push("/")} variant="primary">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
