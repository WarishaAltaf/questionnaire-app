import RadioButtonCard from "@/components/ui/radioButtonCard";
import React from "react";

function Question1Form({
  selectedOption,
  handleOptionChange,
  handleOptionSelect,
  error,
}) {
  return (
    <form>
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
      {error?.option && (
        <p className="text-red-500 text-sm mt-4 text-center">{error.option}</p>
      )}
    </form>
  );
}

export default Question1Form;
