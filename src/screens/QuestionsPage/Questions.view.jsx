"use client";
import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import Button from "@/components/ui/Button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Question1Form from "@/components/forms/Question1Form";
import { useRouter } from "next/navigation";
import QuestionsData from "@/utils/config/questionsData.json";
import Question2Form from "@/components/forms/Question2.form";

export const QuestionsView = () => {
  const [selectedOption, setSelectedOption] = useState("Nick Orange");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [scores, setScores] = useState({
    comfort: 0,
    looks: 0,
    price: 0,
  });
  const router = useRouter();
  const selectedQuestionData = QuestionsData[`question${currentQuestion}`];
  const numberOfQuestions = Object.keys(QuestionsData).length;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleBackPress = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    } else router.back();
  };
  const handleNextPress = (data) => {
    if (!data) return;
    if (currentQuestion < numberOfQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleScoresChange = (option, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [option]: score + 1,
    }));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-primary-0 text-white p-8">
      <div className="md:hidden flex">
        <FormLeftSideSection />
      </div>

      <div className="text-center mb-6 z-10">
        <h2 className="text-white md:text-gray-0 text-xs font-bold uppercase">
          Question {currentQuestion}
        </h2>
        <h1 className="text-white text-xl md:text-3xl font-bold mt-8">
          {selectedQuestionData.question}
        </h1>
      </div>

      {currentQuestion === 1 ? (
        <Question1Form
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleOptionSelect={handleOptionSelect}
        />
      ) : (
        <Question2Form
          scores={scores}
          handleScoresChange={handleScoresChange}
        />
      )}

      <div className="flex justify-between items-center mt-8 w-full max-w-md md:max-w-xl space-x-4">
        <Button
          onClick={handleBackPress}
          text={selectedQuestionData.prevButtonText}
          leftIcon={<ArrowUpLeft size={15} strokeWidth={5} />}
          variant={"pink"}
        />
        <Button
          onClick={handleNextPress}
          text={selectedQuestionData.nextButtonText}
          disabled={!selectedOption}
          variant={selectedOption ? "lime" : "disabled"}
          rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
        />
      </div>
    </main>
  );
};
