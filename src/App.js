import HeroBanner from "./components/HeroBanner";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Heroku from "./components/heroki/HerokuText";
import Ecommerce from "./components/ecommerce/EcomText";
import Portfolio from "./components/portfolio/PortText";
import { useEffect,  useState } from "react";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import { Fragment } from "react";

export default function App() {
  const [size, setSize] = useState({ x: 0 });
  // const [width, setWidth] = useState();
  // const widthRef = useRef(null)
  // console.log(widthRef.style.width);
  // console.log(widthRef.current.container.current);

  const updateSize = () => setSize({ x: window.innerWidth });

  useEffect(() => (window.onresize = updateSize), [size.x]);
  // useEffect(() => (console.log(widthRef.current)), []);

    // console.log(size.x);
  


  return (
    <Fragment>
    <Parallax pages={10.3} className="bar" enabled>
      <ParallaxLayer offset={0} factor={size.x >= 1024 ? 1.5 : 1}>
        <HeroBanner />
      </ParallaxLayer>
       
      <ParallaxLayer
        sticky={{
          start:1.5,
          end:3.5,
        }}
      >
        <Heroku size={size.x} />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 3.5,
          end: 5.5 ,
        }}
      >
        <Ecommerce size={size.x} />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 5.5 ,
          end:7.5,
        }}
      >
        <Portfolio size={size.x} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={8.5}
        // factor={size.x >= 1024 ? 1 : 0.4}
      >
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        offset={9.5}
        // factor={size.x >= 1024 ? 1 : 0.5}
      >
        <Contacts size={size.x} />
      </ParallaxLayer>
      </Parallax>
         
    </Fragment>
  );
}
