import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button
      className="py-3 text-xs font-semibold tracking-wide text-white rounded-full shadow-sm bg-primary shadow-primary md:text-sm md:px-9 px-7"
    >
      {children}
    </button>
  );
};

export default ButtonFill;