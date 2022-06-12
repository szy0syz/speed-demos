import React from "react";
import NewsLetter from "./NewsLetter";
import Logo from "../../assets/logo.png";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  const Links = [
    { title: "Location", links: ["America", "Asia", "Eurpoe", "Africa"] },
    { title: "Contact", links: ["About Me", "Teams", "Profile", "FAQ"] },
    { title: "Legals", links: ["Privacy", "Disclaimer", "Terms", "Company"] },
  ];
  return (
    <footer className="px-4 pt-20 md:px-24 bg-lightprimary">
      <NewsLetter />
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="flex-1">
          <img src={Logo} alt="logo" className="h-12" />
          <p className="text-sm leading-relaxed text-gray-600 md:w-1/2 pt-7">
            We envision a world where everyone feels welcome in the American
            hiking community.
          </p>
          <SocialMedia />
        </div>
        <div className="flex flex-wrap flex-1 gap-20">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="pb-3 font-semibold">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li key={idx} className="py-2.5 text-sm text-gray-600">
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="py-10 mt-6 text-sm text-center text-gray-600">
        Copyright © 2021. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;