import DropDown from "components/dropdown/DropDown";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];

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
