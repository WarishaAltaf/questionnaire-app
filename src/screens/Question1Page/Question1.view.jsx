"use client";
import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import Button from "@/components/ui/Button";
import RadioButtonCard from "@/components/ui/radioButtonCard";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

export const Question1View = () => {
  const [selectedOption, setSelectedOption] = useState("Nick Orange");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    console.log("value", value);
    setSelectedOption(value);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-primary-0 text-white p-8">
      <div className="md:hidden flex">
        <FormLeftSideSection />
      </div>
      <div className="text-center mb-6 z-10">
        <h2 className="text-white md:text-gray-0 text-xs font-bold uppercase">
          Question 1
        </h2>
        <h1 className="text-white text-xl md:text-3xl font-bold mt-8">
          What is your preferred choice?
        </h1>
      </div>

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

      <div className="flex justify-between items-center mt-8 w-full max-w-sm md:max-w-lg space-x-4">
        <Button
          text={"Back"}
          leftIcon={<ArrowUpLeft size={15} strokeWidth={5} />}
          variant={"pink"}
        />
        <Button
          text={"Next"}
          disabled={!selectedOption}
          variant={selectedOption ? "lime" : "disabled"}
          rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
        />
      </div>
    </main>
  );
};
