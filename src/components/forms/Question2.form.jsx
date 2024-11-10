import React, { useState, useEffect } from "react";

function Question2Form({ scores, handleScoresChange }) {
  const options = ["comfort", "looks", "price"];
  const buttons = Array.from({ length: 5 });

  return (
    <div className="max-w-xl w-full z-10">
      {options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          className="bg-white rounded-full px-3 py-2 md:px-7 md:py-4 flex flex-row items-center justify-between w-full mb-6"
        >
          <h1 className="text-lg text-black font-bold capitalize">{option}</h1>
          <div className="flex gap-5 sm:gap-10 md:gap-12">
            {buttons.map((_, buttonIndex) => (
              <button
                key={buttonIndex}
                className={`w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full border-2 ${
                  buttonIndex < scores[option]
                    ? "bg-black border-black"
                    : "bg-gray-200 border-gray-400"
                }`}
                onClick={() => handleScoresChange(option, buttonIndex)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Question2Form;
