import React from "react";
import mail from "../../assets/mail.png";
import ButtonFill from "../ButtonFill";
const NewsLetter = () => {
  return (
    <div className="text-center pb-9">
      <h1 className="text-2xl font-semibold leading-normal md:w-1/2 md:mx-auto">
        Subscribe to Our Newsletter For Weekly Article Update.
      </h1>
      <p className="pt-5 text-sm leading-loose text-gray-600 md:w-1/2 md:mx-auto">
        We have hiking-related blog so we can share our thought and rutinity in
        our blog that updated weekly. We will not spam you, we promise.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 my-6 md:w-2/4 md:mx-auto">
        <div className="flex items-center justify-center flex-1 gap-2 px-5 my-4 border rounded-full md:w-2/5 md:mx-auto border-primary">
          <img src={mail} alt="mail" className="h-5" />
          <input
            type="email"
            placeholder="Enter Your e-mail address"
            className="flex-1 py-3 text-sm bg-transparent outline-none placeholder-primary"
          />
        </div>
        <div>
          <ButtonFill>Subscribe</ButtonFill>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;