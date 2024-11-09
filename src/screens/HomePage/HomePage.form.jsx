import React from "react";
import { ArrowUpRight } from "lucide-react";

const HomePageForm = ({ handleFormSubmit }) => {
  return (
    <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
      <label htmlFor="email" className="font-semibold">
        Email
      </label>
      <input
        required
        type="email"
        id="email"
        placeholder="Enter email address"
        className="p-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="flex flex-row items-center justify-between space-x-2 p-3 bg-lime-500 text-black font-bold rounded-2xl hover:bg-lime-600 px-6"
      >
        <strong>Start Survey</strong>
        <ArrowUpRight size={15} strokeWidth={5} className="ml-2" />
      </button>
    </form>
  );
};

export default HomePageForm;
