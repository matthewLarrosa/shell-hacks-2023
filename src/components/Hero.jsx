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
        <div className="ml-4 absolute top-20 ml-2 font-zilla font-medium text-4xl text-white text-left">Affordable insurance starts here.</div>
        <button className="h-12 px-6 m-2 relative mt-36 rounded-full font-zilla align-middle text-red-700 text-xl bg-white bg-auto">Savings Here</button>
        <span className="absolute top-64 mb-12 font-zilla font-light text-white text-xl px-9 text-center" ref={el} />
      </div>
    </div>
  );
}
