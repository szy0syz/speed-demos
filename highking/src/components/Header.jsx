import React from "react";
import Nav from "./Navbar/Nav";
import HeroImg from "../assets/Hero.png";
import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";
const Header = () => {
  const Info = [
    {
      icon: Icon1,
      title: "Secret Locations",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon2,
      title: "Safe Adventure",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Professional Hikers",
      des: "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <section className="px-4 py-4 bg-center bg-cover bg-Hero md:px-24">
      <Nav />
      <div className="flex flex-col gap-5 pt-20 md:flex-row">
        <div className="flex-1">
          <h1
            className="text-4xl font-semibold leading-snug tracking-wide md:text-5xl md:leading-tight"
          >
            Be prepared for the mountains and beyond.
          </h1>
          <p className="py-2 leading-relaxed text-gray-600 md:w-2/3 md:py-4">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you!
          </p>
          <br />
          <div className="flex flex-wrap gap-2 md:gap-4">
            <ButtonFill>Contact Us</ButtonFill>
            <ButtonOutline />
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <img src={HeroImg} alt="hero" className="h-2/3" />
        </div>
      </div>

      <div className="flex flex-col gap-10 p-10 mt-5 bg-white rounded-md shadow-2xl md:flex-row md:-mt-48 md:p-14">
        {Info.map((info, i) => (
          <div key={i}>
            <img src={info.icon} alt="icon" className="h-16" />
            <h1 className="my-3 text-lg font-semibold">{info.title}</h1>
            <p className="text-sm leading-relaxed text-gray-600">{info.des}</p>
            <button className="my-1 text-sm font-medium text-rose-600">
              Read More
            </button>
          </div>
        ))}
      </div>
      <p className="block py-10 text-xs text-center text-gray-600 md:text-sm">
        Don’t hesitate to contact us to get better Information.
        <span className="px-1 italic font-semibold text-rose-600">
          EXPLORE ALL TREKKING.
        </span>
      </p>
    </section>
  );
};

export default Header;