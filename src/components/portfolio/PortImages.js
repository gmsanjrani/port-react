import React from "react";
import img1 from "../../assets/Images/portfolio/portHome.png";
import img2 from "../../assets/Images/portfolio/portContacts.png";
import img3 from "../../assets/Images/portfolio/portAbout.png";
import img4 from "../../assets/Images/portfolio/portExperience.png";

import {  ParallaxLayer } from "@react-spring/parallax";

function PortImages({ size }) {
  return (
    <div className=" absolute w-[70%] md:w-1/2 h-screen right-0 top-0 ">
      <div className=" w-full flex h-full relative">
        <div className=" w-1/2 h-full">
          <ParallaxLayer offset={3.5} speed={ 1.2 }>
            <img
              src={img1}
              alt="nothing"
              className=" w-[200px] md:w-[250px]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.9} speed={ 1 }>
            <img
              src={img2}
              alt="image2"
              className=" w-[180px] md:w-[220px]"
            />
          </ParallaxLayer>
        </div>
        <div className=" w-1/2 h-full absolute left-1/2 top-1/2">
          <ParallaxLayer offset={3.5} speed={ 1.2 }>
            <img
              src={img3}
              alt="nothing"
              className=" w-[200px] md:w-[250px]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.8} speed={ 1 }>
            <img
              src={img4}
              alt="image2"
              className=" w-[180px] md:w-[220px]"
            />
          </ParallaxLayer>
        </div>
      </div>
    </div>
  );
}

export default PortImages;
