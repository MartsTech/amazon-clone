import { useRouter } from "next/router";
import { FC } from "react";

interface HeaderBackButtonProps {}

const HeaderBackButton: FC<HeaderBackButtonProps> = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && (
        <button
          type="button"
          className="mr-4 sm:mr-auto py-[0.33rem] px-[0.66rem]
          bg-white shadow-md rounded-lg text-sm relative"
          onClick={() => router.back()}
        >
          Back
        </button>
      )}
    </>
  );
};

export default HeaderBackButton;
