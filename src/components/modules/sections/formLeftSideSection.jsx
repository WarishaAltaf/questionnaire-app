import React from "react";

const FormLeftSideSection = () => {
  return (
    <section className="md:relative w-full md:w-1/2 flex items-center justify-center md:mr-20">
      <img
        src="/png/main-arrow.png"
        alt="Shoe"
        className="absolute -top-8 md:left-1/2 transform -translate-x-1/2 z-10 opacity-50 md:w-64 md:h-64 w-36 h-36 mt-6 md:mt-0"
      />
      <img
        src="/png/shoe.png"
        alt="Shoe"
        className="absolute md:relative md:z-1 md:mt-10 md:w-96 md:h-96 w-52 h-52 opacity-80 top-0 md:opacity-100 z-0"
      />
      <div className="absolute -bottom-10 h-4 w-[60%] self-center bg-black hidden md:flex opacity-80 blur-lg"></div>
    </section>
  );
};

export default FormLeftSideSection;
