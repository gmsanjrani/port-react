import React from "react";
import linkdin from "../assets/Images/Social/linkedin.svg";
import tweeter from "../assets/Images/Social/twitter.svg";
import mail from "../assets/Images/Social/mail.svg";
import insta from "../assets/Images/Social/insta.svg";
import git from "../assets/Images/Social/git.svg";

import { ParallaxLayer } from "@react-spring/parallax";

function Contacts() {
  return (
    <div className=" flex justify-center items-center h-[30vh] gap-8 md:gap-12 ml-[10%]  relative">
      <a
        target="_blank"
        href="/"
        rel="noreferrer"
        className="z-50 cursor-pointer"
      >
        <img
          src={tweeter}
          alt="nothing"
          className=" z-50 cursor-pointer w-14 md:w-28"
        />
      </a>

      <a
        target="_blank"
        href={"https://github.com/gmsanjrani"}
        rel="noreferrer"
        className="z-50 cursor-pointer"
      >
        <img
          src={git}
          alt="nothing"
          className="z-50 cursor-pointer  w-14 md:w-28"
        />
      </a>

      <a
        target="_blank"
        href={"https://www.linkedin.com/in/gmsanjrani/"}
        rel="noreferrer"
        className="z-50 cursor-pointer"
      >
        <img
          src={linkdin}
          alt="nothing"
          className="z-50 cursor-pointer  w-14 md:w-28"
        />
      </a>

      <a
        target="_blank"
        href="/"
        rel="noreferrer"
        className="z-50 cursor-pointer"
      >
        <img
          src={insta}
          alt="nothing"
          className="z-50 cursor-pointer  w-14 md:w-28"
        />
      </a>

      <a
        target="_blank"
        href={"gmsanjrani111@gmail.com"}
        rel="noreferrer"
        className="z-50 cursor-pointer"
      >
        <img
          src={mail}
          alt="nothing"
          className="z-50 cursor-pointer  w-14 md:w-28"
        />
      </a>

      <ParallaxLayer horizontal offset={-21} speed={-0.7} factor={1}>
        <h1
          className=" absolute invisible md:visible md:text-9xl  text-[#EEE] lg:font-['AvenirHeavy']
           lg:text-[10rem] xl:text-[11rem] lg:bottom-[30%]  whitespace-nowrap  "
        >
          CONTACTS
        </h1>
      </ParallaxLayer>
    </div>
  );
}

export default Contacts;
