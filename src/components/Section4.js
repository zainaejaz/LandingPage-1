import React from "react";

function Section4() {
  return (
    <div className="flex flex-col items-center justify-center bg-custom text-white py-20 px-4 text-center w-full h-auto relative">
      <h2 className="text-white text-3xl md:text-[46px] font-semibold font-['Clash Display'] mb-5">
        Get Groovin' Today
      </h2>
      <p className="w-full max-xl:w-[70%] text-center text-white text-lg md:text-2xl font-normal font-['Clash Display'] mx-auto md:mx-[199px] mb-14">
        Ready to rock the digital world? Fill out the form to schedule your free
        consultation and let's get started on your next big idea!
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-[10px] flex items-center mx-auto">
        Get a Quote
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Section4;
