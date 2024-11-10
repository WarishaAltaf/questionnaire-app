import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const HomePageForm = ({ handleFormSubmit, disabled }) => {
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
      <Button
        text="Start Survey"
        variant={disabled ? disabled : "lime"}
        rightIcon={<ArrowUpRight size={15} strokeWidth={5} />}
        backgroundColor={"lime-500"}
        disabled={false}
      />
    </form>
  );
};

export default HomePageForm;
