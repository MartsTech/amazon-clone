import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import { motion } from "framer-motion";

interface DropDownProps {
  className: string;
  items: string[];
  defaultItem: string;
}

const DropDown: React.FC<DropDownProps> = ({
  className,
  items,
  defaultItem,
}) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(defaultItem);

  return (
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
          className="bg-white rounded-lg absolute top-10 right-0
          list-none shadow-md z-10 h-44 overflow-scroll scrollbar-hide"
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-10%" }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={(e) => {
                setSelected(item);
                setActive(false);
                e.stopPropagation();
              }}
              className="transition-colors duration-200 py-2 pr-8 pl-4
              whitespace-nowrap first-of-type:pt-3 last-of-type:pb-3
              hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </span>
  );
};

export default DropDown;
