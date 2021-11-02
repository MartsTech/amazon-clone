import DropDown from "components/dropdown/DropDown";
import { languages } from "utils/data";

interface HeaderLanguagesProps {}

const HeaderLanguages: React.FC<HeaderLanguagesProps> = ({}) => {
  return (
    <DropDown
      className="hidden sm:flex"
      items={languages}
      defaultItem={languages[0]}
    />
  );
};

export default HeaderLanguages;
