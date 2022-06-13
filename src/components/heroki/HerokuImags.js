import React from "react";
import img1 from "../../assets/Images/heroki/heroCloud.png";
import img2 from "../../assets/Images/heroki/heroDevelop.png";
import img3 from "../../assets/Images/heroki/heroFeatures.png";
import img4 from "../../assets/Images/heroki/heroDocs.png";

import {  ParallaxLayer } from "@react-spring/parallax";

function HerokuImages({ size }) {
  return (
    <div className=" absolute w-[70%] md:w-1/2 h-screen right-0 top-0 ">
      <div className=" w-full flex h-full relative">
        <div className=" w-1/2 h-full">
          <ParallaxLayer offset={1} speed={ 1.2 }>
            <img
              src={img1}
              alt="nothing"
            className=" w-[200px] md:w-[250px]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={ 0.9 }>
            <img
              src={img2}
              alt="image2"
              className=" w-[180px] md:w-[220px]"
            />
          </ParallaxLayer>
        </div>
        <div className=" w-1/2 h-full absolute left-1/2 top-1/2">
          <ParallaxLayer offset={1} speed={ 1.5 }>
            <img
              src={img3}
              alt="nothing"
              className=" w-[200px] md:w-[250px]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={ 1 }>
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

export default HerokuImages;
