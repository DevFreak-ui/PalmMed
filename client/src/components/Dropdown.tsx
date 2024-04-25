import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  dropdownItems: string[];
}

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [activeDropDownItem, setActiveDropDownItem] = useState(
    dropdownItems[0]
  );

  const handleDropDownSelect = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => {
    setActiveDropDownItem(item);
    setIsDropDownActive(false);
  };

  return (
    <div className="">
      <div
        className="flex  items-center space-x-2 cursor-pointer  "
        onClick={() => {
          setIsDropDownActive(!isDropDownActive);
        }}
      >
        <span className="font-bold"> {activeDropDownItem}</span>
        <span>{isDropDownActive ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>

      {isDropDownActive && (
        <div className="absolute top-5.5 right-50 bg-neutral-300 w-[110px] ps-4 py-2 rounded-lg z-50">
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              onClick={(event) => handleDropDownSelect(event, item)}
              className="hover:text-purple-500 hover:font-bold cursor-pointer list-none"
            >
              {item}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
