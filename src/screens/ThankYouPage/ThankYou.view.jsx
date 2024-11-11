"use client";
import FormLeftSideSection from "@/components/modules/sections/formLeftSideSection";
import Button from "@/components/ui/button";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export function ThankYouView() {
  const router = useRouter();
  const handleBackPress = () => {
    router.back();
  };
  const handleBackToHomePress = () => {
    redirect("/");
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-primary-0 text-white p-8">
      <div className="flex flex-col md:flex-row max-w-md md:max-w-5xl w-full space-y-8 md:space-y-0">
        <FormLeftSideSection />

        <section className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-6 z-10 lg:mr-48 md:pt-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-right text-right">
            Thank You
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold md:text-right text-right">
            for your feedback
          </h3>

          <div className="flex justify-end items-center mt-8 w-full max-w-md md:max-w-xl space-x-4">
            <Button
              onClick={handleBackPress}
              text={"Back"}
              leftIcon={<ArrowUpLeft size={15} strokeWidth={5} />}
              variant={"pink"}
            />
            <Button
              onClick={handleBackToHomePress}
              text={"Back to Home"}
              variant={"white"}
              rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
