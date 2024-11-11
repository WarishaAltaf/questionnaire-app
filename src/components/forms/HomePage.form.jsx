import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/button";

const HomePageForm = ({
  handleFormSubmit,
  isLoading,
  error,
  value,
  onChangeValue,
}) => {
  return (
    <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
      <label htmlFor="email" className="font-semibold">
        Email
      </label>
      <input
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type="email"
        id="email"
        placeholder="Enter email address"
        className="p-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      {error && <p className="text-red-500 text-sm text-start ml-3">{error}</p>}
      <Button
        isLoading={isLoading}
        text="Start Survey"
        variant={"lime"}
        rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
        backgroundColor={"lime-500"}
        disabled={false}
      />
    </form>
  );
};

export default HomePageForm;
