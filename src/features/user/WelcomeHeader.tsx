import { useSession } from "next-auth/client";

interface WelcomeHeaderProps {}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = () => {
  const [session] = useSession();

  return (
    <div className="flex self-start items-center">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="h-20 rounded-full mr-6 shadow-sm"
        src={session?.user?.image || "/images/default.jpg"}
        alt="avatar"
      />
      <span className="mt-16">
        <h3
          className="font-semibold"
          style={{ fontSize: "calc(1.3rem + .6vw)" }}
        >
          Welcome {session?.user?.name}
        </h3>
        <p className="max-w-[480px] mb-8 opacity-50">
          Your Amazon Account is created and we would like to know a little bit
          more about yourself. These details will be saved for future orders.
        </p>
      </span>
    </div>
  );
};

export default WelcomeHeader;
