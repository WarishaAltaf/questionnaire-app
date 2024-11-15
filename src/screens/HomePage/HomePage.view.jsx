"use client";

import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import React from "react";
import HomePageForm from "@/components/forms/HomePage.form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/lib/validateEmail";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "@/redux/user/actions";

export const HomePageView = () => {
  const { user, error } = useSelector((state) => state.user);
  const [email, setEmail] = React.useState("");
  const [emailError, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email) {
      setError("Please enter your email address");
      setIsLoading(false);
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
    } else {
      const response = await dispatch(getUserDetails(email));

      if (response.error) {
        setError(error);
        setIsLoading(false);
        return;
      } else if (response.payload.status === "completed") {
        setError("");
        setIsLoading(false);
        router.push("/thank-you");
      } else {
        setError("");
        setIsLoading(false);
        router.push("/questions");
      }
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setError("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-primary-0 text-white p-8">
      <div className="flex flex-col md:flex-row max-w-md md:max-w-5xl w-full space-y-8 md:space-y-0">
        <FormLeftSideSection />

        <section className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:text-start text-center">
            Questionnaire
          </h1>
          <div className="p-4 bg-pink-200 text-gray-800 rounded-2xl shadow-lg">
            <h2 className="font-semibold md:font-medium mb-2">Welcome!</h2>
            <p className="text-xs mt-3">
              We&apos;re excited to hear your thoughts, ideas, and insights.
              Don&apos;t worry about right or wrong answers—just speak from the
              heart.
              {"\n"}Your genuine feedback is invaluable to us!
            </p>
          </div>

          <HomePageForm
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            error={emailError}
            value={email}
            onChangeValue={handleEmailChange}
          />
        </section>
      </div>
    </main>
  );
};
