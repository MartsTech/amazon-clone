import DropDown from "components/dropdown/DropDown";
import { FC } from "react";
import { languages } from "utils/data";

interface HeaderLanguagesProps {}

const HeaderLanguages: FC<HeaderLanguagesProps> = () => (
  <DropDown
    className="hidden sm:flex"
    items={languages}
    defaultItem={languages[0]}
  />
);

export default HeaderLanguages;
