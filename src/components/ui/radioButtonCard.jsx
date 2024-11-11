import React from "react";

const RadioButtonCard = ({
  option,
  image = "/png/nike-orange.png",
  selectedOption,
  handleOptionChange,
  handleOptionSelect,
  innerDivWidth,
}) => {
  return (
    <div
      className={`flex flex-col items-center transition duration-300 hover:scale-105 `}
    >
      <input
        type="radio"
        name="option"
        value={option}
        checked={selectedOption === option}
        onChange={handleOptionChange}
        className="appearance-none border-2 border-black rounded-full h-5 w-5 bg-white checked:bg-black checked:border-white focus:outline-none cursor-pointer"
      />
      <div
        onClick={() => handleOptionSelect(option)}
        className={`md:w-64 md:h-64 ${
          innerDivWidth ?? "w-30"
        } h-36 p-4 bg-gray-100 rounded-3xl flex flex-col items-center justify-center cursor-pointer`}
      >
        <span className="text-white text-md sm:text-lg text-center font-medium mb-4">
          {option}
        </span>
        <img src={image} alt={option} className="md:w-32 md:h-32 w-20 h-20" />
      </div>
    </div>
  );
};

export default RadioButtonCard;
