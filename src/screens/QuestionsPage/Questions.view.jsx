"use client";
import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import Button from "@/components/ui/Button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import QuestionsForm from "./Questions.form";
import { useRouter } from "next/navigation";

export const QuestionsView = () => {
  const [selectedOption, setSelectedOption] = useState("Nick Orange");
  const router = useRouter();
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const handleBackPress = () => {
    router.back();
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

      <QuestionsForm
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
        handleOptionSelect={handleOptionSelect}
      />

      <div className="flex justify-between items-center mt-8 w-full max-w-sm md:max-w-lg space-x-4">
        <Button
          onClick={handleBackPress}
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
