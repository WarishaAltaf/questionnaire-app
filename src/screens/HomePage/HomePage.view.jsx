"use client";

import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import React from "react";
import HomePageForm from "./HomePage.form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HomePageView = () => {
  const router = useRouter();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    router.push("/question1");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-primary-0 text-white p-8">
      <div className="flex flex-col md:flex-row max-w-md md:max-w-5xl w-full space-y-8 md:space-y-0">
        <FormLeftSideSection />

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:text-start text-center">
            Questionnaire
          </h1>
          <div className="p-4 bg-pink-200 text-gray-800 rounded-2xl shadow-lg">
            <h2 className="font-semibold md:font-medium mb-2">Welcome!</h2>
            <p className="text-xs mt-3">
              We're excited to hear your thoughts, ideas, and insights. Don't
              worry about right or wrong answers—just speak from the heart.
              {"\n"}Your genuine feedback is invaluable to us!
            </p>
          </div>

          <HomePageForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  );
};
