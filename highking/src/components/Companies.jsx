import React from "react";
import com1 from "../assets/com-1.png";
import com2 from "../assets/com-2.png";
import com3 from "../assets/com-3.png";
import com4 from "../assets/com-4.png";
import com5 from "../assets/com-5.png";
const Companies = () => {
  return (
    <section className="text-center">
      <p className="py-3 text-sm font-normal text-primary">Safe Journey</p>
      <h1 className="text-xl font-semibold md:text-3xl">
        Trusted by Big Companies
      </h1>
      <div
        className="flex flex-wrap justify-center mx-auto my-16 md:w-2/3 gap-x-20 md:gap-y-12 gap-y-8"
      >
        <img src={com1} alt="logo" className="h-7" />
        <img src={com2} alt="logo" className="h-7" />
        <img src={com3} alt="logo" className="h-7" />
        <img src={com4} alt="logo" className="h-7" />
        <img src={com5} alt="logo" className="h-7" />
      </div>
    </section>
  );
};

export default Companies;