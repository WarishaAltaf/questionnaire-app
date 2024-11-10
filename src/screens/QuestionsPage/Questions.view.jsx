"use client";
import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import Button from "@/components/ui/Button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Question1Form from "@/components/forms/Question1Form";
import { useRouter } from "next/navigation";
import QuestionsData from "@/utils/config/questionsData.json";
import Question2Form from "@/components/forms/Question2.form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "@/redux/user/actions";

export const QuestionsView = () => {
  const { user } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [error, setError] = useState(null);
  const [scores, setScores] = useState({
    comfort: 0,
    looks: 0,
    price: 0,
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedQuestionData = QuestionsData[`question${currentQuestion}`];
  const numberOfQuestions = Object.keys(QuestionsData).length;

  useEffect(() => {
    console.log("user, ", user);
    if (user.status === "in-progress") {
      setSelectedOption(user?.progress?.question1);
    } else if (user.status === "completed") {
      console.log("user", user?.progress?.question2);
      // setScores(user?.progress?.question2);
    }
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setError({ option: null });
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setError({ option: null });
  };

  const handleBackPress = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
    } else router.back();
  };

  const handleNextPress = async () => {
    if (currentQuestion === 1) {
      if (!selectedOption) {
        setError({ option: "Please select one" });
        return;
      }
      let data = {
        email: user.email,
        progressData: { ...user.progress, question1: selectedOption },
        status: "in-progress",
      };
      await handlerReduxData(data);
    } else if (currentQuestion === 2) {
      const newError = ["comfort", "looks", "price"].reduce((acc, key) => {
        if (scores[key] === 0) acc[key] = `Please select a score for ${key}`;
        return acc;
      }, {});

      if (Object.keys(newError).length > 0) {
        setError(newError);
        return;
      }
      let data = {
        email: user.email,
        progressData: { ...user.progress, question2: scores },
        status: "completed",
      };
      await handlerReduxData(data);
    }
  };

  const handlerReduxData = async (data) => {
    const response = await dispatch(updateUserDetails(data));

    if (response.error) {
      console.log("Error updating user details", response.error);
      return;
    } else {
      handleNextPage();
    }
  };

  const handleNextPage = () => {
    if (currentQuestion < numberOfQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      router.push("/thank-you");
    }
  };

  const handleScoresChange = (option, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [option]: score + 1,
    }));
    setError((prevError) => ({
      ...prevError,
      [option]: null,
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
          error={error}
        />
      ) : (
        <Question2Form
          scores={scores}
          handleScoresChange={handleScoresChange}
          error={error}
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
          variant={currentQuestion === 1 ? "lime" : "white"}
          rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
        />
      </div>
    </main>
  );
};
