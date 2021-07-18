import { MouseEventHandler } from "react";

interface DropDownItemProps {
  onClick: MouseEventHandler<HTMLLIElement>;
  item: string;
}

const DropDownItem: React.FC<DropDownItemProps> = ({ onClick, item }) => {
  return (
    <li
      onClick={onClick}
      className="transition-colors duration-200 py-2 pr-8 pl-4
          whitespace-nowrap first-of-type:pt-3 last-of-type:pb-3
          hover:bg-gray-100"
    >
      {item}
    </li>
  );
};

export default DropDownItem;
