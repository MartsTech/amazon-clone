import { useRouter } from "next/router";

interface HeaderBackButtonProps {}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && (
        <button
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
