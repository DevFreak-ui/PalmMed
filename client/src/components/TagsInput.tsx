import React, { useState, KeyboardEvent } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const TagsInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["styles", "uifixes", "frontend"]);

  const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value.trim();
    if (event.key === "Enter" && inputValue !== "") {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      setTags((prevState) => {
        return [...prevState, inputValue]; // Append the new tag to the existing array
      });
        event.currentTarget.value = "";
        
    }
  };


  const removeTags = (index: number) => {
    setTags(tags.filter((_, idx) => idx !== index));
  };

  return (
    <div className="border-none flex items-center space-x-4">
      <ul className="flex">
        {tags.map((tag, index) => (
          <li key={index} className="flex items-center justify-center p-1 rounded-md text-white space-x-1 bg-[#7443FF]   ml-2">
            <span>{tag}</span>
            <button onClick={() => removeTags(index)}>
              <IoIosCloseCircleOutline />
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Something..." className="bg-transparent border-none focus:border-none"
        onKeyUp={(event) => addTags(event as KeyboardEvent<HTMLInputElement>)}
      />
    </div>
  );
};

export default TagsInput;
