import Image from "next/image";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
      <Image
        src="/images/logo.png"
        width={150}
        height={40}
        objectFit="contain"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Logo;
