import DropDown from "components/dropdown/DropDown";
import Image from "next/image";
import { currency, languages } from "utils/data";

interface FooterBottomProps {}

const FooterBottom: React.FC<FooterBottomProps> = () => {
  return (
    <div
      className="py-8 px-12 flex-col items-center bg-[#eaeaea]
    border-t border-[rgba(26, 26, 44, 0.05)] md:flex"
    >
      <Image
        height={24}
        width={80}
        objectFit="contain"
        src="/icons/logo.svg"
        alt="logo"
      />
      <span className="text-sm whitespace-nowrap opacity-75 ml-4">
        &copy; 2020 | Developed by{" "}
        <a
          href="https://github.com/MartsTech"
          className="text-[#f90] transition-all duration-200 
          border-b border-dotted border-[#f90]
          hover:text-[#dc143c] hover:border-[#dc143c]"
        >
          Martin Velkov
        </a>
      </span>
      <span className="ml-auto flex items-center pl-4 m-4">
        <DropDown
          className="footer__dropDown"
          menu="top-auto bottom-full mb-2"
          items={languages}
          defaultItem={languages[0]}
        />
        <DropDown
          className="footer__dropDown mr-0"
          menu="top-auto bottom-full mb-2"
          items={currency}
          defaultItem={currency[0]}
        />
      </span>
    </div>
  );
};

export default FooterBottom;
