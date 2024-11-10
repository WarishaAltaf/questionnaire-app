import RadioButtonCard from "@/components/ui/radioButtonCard";
import React from "react";

function Question1Form({
  selectedOption,
  handleOptionChange,
  handleOptionSelect,
}) {
  return (
    <div>
      <div className="flex flex-row gap-6 items-center justify-center z-10">
        <RadioButtonCard
          option={"Nike Orange"}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleOptionSelect={handleOptionSelect}
          image="/png/nike-orange.png"
        />
        <RadioButtonCard
          option={"Nike Black"}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleOptionSelect={handleOptionSelect}
          image="/png/nike-black.png"
          innerDivWidth={"w-32"}
        />
      </div>
      {selectedOption === null && (
        <p className="text-red-500 text-sm mt-4">Please select one</p>
      )}
    </div>
  );
}

export default Question1Form;
