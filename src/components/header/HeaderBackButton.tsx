import { useRouter } from "next/router";

interface HeaderBackButtonProps {}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && (
        <button
          className="relative py-[0.33rem] px-[0.66rem] bg-white
              shadow-md rounded-lg text-sm mr-4 sm:mr-auto"
          onClick={() => router.back()}
        >
          Back
        </button>
      )}
    </>
  );
};

export default HeaderBackButton;
