import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import OutsideClick from "components/layouts/OutsideClick";
import { motion } from "framer-motion";
import { useState } from "react";
import DropDownItem from "./DropDownItem";

interface DropDownProps {
  className: string;
  menu?: string;
  items: string[];
  defaultItem: string;
}

const DropDown: React.FC<DropDownProps> = ({
  className,
  menu,
  items,
  defaultItem,
}) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(defaultItem);

  return (
    <OutsideClick opened={active} onClose={() => setActive(false)}>
      <span
        className={`py-[0.33rem] pr-[0.15rem] pl-[0.66rem] bg-white
    shadow-md rounded-lg text-sm mr-4 flex items-center cursor-pointer
     relative ${className}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setActive((active) => !active);
        }}
      >
        {selected}
        <KeyboardArrowDownRoundedIcon
          className={`opacity-75 !transition-transform !duration-200
          transform rotate-0 scale-x-90 scale-y-95 ${
            active && "-rotate-180 scale-x-90 scale-y-95"
          }`}
        />
        {active && (
          <motion.ul
            className={`bg-white rounded-lg absolute top-10 right-0
          list-none shadow-md z-10 h-44 overflow-scroll scrollbar-hide ${menu}`}
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
          >
            {items.map((item, index) => (
              <DropDownItem
                key={index}
                item={item}
                onClick={(e) => {
                  setSelected(item);
                  setActive(false);
                  e.stopPropagation();
                }}
              />
            ))}
          </motion.ul>
        )}
      </span>
    </OutsideClick>
  );
};

export default DropDown;
