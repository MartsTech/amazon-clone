import Button from "components/buttons/Button";
import { signOut, useSession } from "next-auth/client";

interface ProfileHeaderProps {}

const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  const [session] = useSession();

  return (
    <div className="flex self-start items-center">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={session?.user?.image || "images/default.jpg"}
        alt="avatar"
        className="h-20 rounded-full mr-6 shadow-sm"
      />
      <span className="mt-16">
        <h3
          className="font-semibold"
          style={{ fontSize: "calc(1.3rem + .6vw)" }}
        >
          Hi, {session?.user?.name}
        </h3>
        <p className="max-w-[480px] mb-8 opacity-50">
          This is your profile page. Here, you can view and customize your
          profile details. Double check your details before check out.
        </p>
      </span>
      <div className="flex ml-auto" style={{ marginLeft: "auto" }}>
        <Button className="py-4 px-6" variant="red" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
