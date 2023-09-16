import largeLogo from "../assets/largeLogo.png";
import Typed from 'typed.js';
import React from "react";

export default function Hero() {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Need a quote?', 'Getting a quote online has never been easier!', 'Scroll down below to learn more'],
        typeSpeed: 80,
        backSpeed: 80,
        showCursor: false,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return (
    <div className="flex h-72 w-screen bg-red-600 justify-center">
      <div className="flex items-center flex-col w-9/12">
        <img className="m-2 p-2 h-44 w-96" src={largeLogo} alt="large logo" />
        <div className="absolute top-56 md:top- ml-2 font-zilla font-medium text-4xl text-white">Hello Neighbor,</div>
        <span className="absolute top-64 md:top-auto mt-2 font-zilla font-light text-white text-xl px-9 text-center" ref={el} />
      </div>
    </div>
  );
}
