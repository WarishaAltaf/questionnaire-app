import React from "react";
import { ClipLoader } from "react-spinners";

const Button = ({
  text,
  leftIcon,
  rightIcon,
  disabled,
  variant,
  className,
  onClick,
  isLoading,
}) => {
  let classes = "";
  switch (variant) {
    case "disabled":
      classes = "bg-gray-400 text-gray-600 cursor-not-allowed";
      break;
    case "lime":
      classes = "bg-lime-500 text-black hover:bg-lime-800 hover:scale-105";
      break;
    case "pink":
      classes = "bg-pink-200 text-black hover:bg-pink-300 hover:scale-105";
      break;
    case "white":
      classes = "bg-white text-black hover:bg-gray-100 hover:scale-105";
      break;
    default:
      classes = "bg-lime-500 text-black hover:bg-lime-800 hover:scale-105";
  }
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      type="submit"
      className={`flex flex-row items-center px-3 py-2 md:p-3 justify-between space-x-2 font-bold transition duration-300 rounded-full md:rounded-2xl ${classes} ${className}`}
    >
      {isLoading && (
        <ClipLoader
          color="#fff"
          size={20}
          className="self-center text-center mx-auto"
        />
      )}
      {!isLoading && (
        <>
          {leftIcon}
          <strong className="text-sm md:text-base">{text}</strong>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
