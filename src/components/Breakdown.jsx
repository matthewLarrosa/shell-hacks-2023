import { useState } from "react";
import "../assets/app.css";

export default function Breakdown() {
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);

  const [step1Text, setStep1Text] = useState("Click to learn more");
  const [step2Text, setStep2Text] = useState("Click to learn more");
  const [step3Text, setStep3Text] = useState("Click to learn more");

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleStep1Click = () => {
    // Update the text when Step 1 card is clicked
    if (isClicked1 == true) {
      setStep1Text("Click to learn more");
      setIsClicked1(false);
      setIsHidden1(true);
    } else {
      setStep1Text(
        "First Name, Last Name, Address, and Date of Birth is all the personal infomation you need to get started!"
      );
      setIsClicked1(true);
      setIsHidden1(false);
    }
  };

  const handleStep2Click = () => {
    // Update the text when Step 1 card is clicked
    if (isClicked2 == true) {
      setStep2Text("Click to learn more");
      setIsClicked2(false);
      setIsHidden2(true);
    } else {
      setStep2Text("Vehicle's VIN number. Dont know where you VIN is located? Most VINs are at bottom left of the Dashboard, or driver's side door, near the door latch. If your not sure, refer to your owners manuel. ");
      setIsClicked2(true);
      setIsHidden2(false);
    }
  };

  const handleStep3Click = () => {
    if (isClicked3 == true) {
      setStep3Text("Click to learn more");
      setIsClicked3(false);
      setIsHidden3(true);
    } else {
      setStep3Text("Lastly, we'll find the best options that match your need. You can choose and compare quotes as you like!");
      setIsClicked3(true);
      setIsHidden3(false);
    }
  };

  return (
    <div className="flex w-screen h-auto p-2">
      <div>
        <div className="ml-2 font-zilla text-left text-black text-2xl">
          Looking for a quote? Were here to assist you every step of the way.
        </div>
        <div className="py-2">
          <div className="px-2 mt-2">
            <div
              onClick={handleStep1Click}
              className="w-auto h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://thumbnails.production.thenounproject.com/nfuzQDyj6LfHqyMrryHXKawd-SU=/fit-in/1000x1000/photos.production.thenounproject.com/photos/74B01E80-C6D4-4E27-838C-197454C7D311.jpg')]
                    bg-cover bg-center"
            >
              <div className={`hidden-div ${isHidden1 ? "hidden z-2" : ""}`}>
                <div
                  className="absolute w-11/12 h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://thumbnails.production.thenounproject.com/nfuzQDyj6LfHqyMrryHXKawd-SU=/fit-in/1000x1000/photos.production.thenounproject.com/photos/74B01E80-C6D4-4E27-838C-197454C7D311.jpg')]
                        bg-cover bg-center blur-md"
                ></div>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="font-zilla z-10 font-bold drop-shadow-lg text-white text-xl text-center">
                  Step 1: Personal Information
                </div>
                <div className="font-zilla z-10 font-medium drop-shadow-lg text-white text-lg text-center px-2">
                  {step1Text}
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mt-2">
            <div
              onClick={handleStep2Click}
              className="w-auto h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://file.kelleybluebookimages.com/kbb/base/house/2022/2022-Toyota-Prius%20Prime-FrontSide_TOPRPME2201_640x480.jpg')] bg-cover bg-center"
            >
              <div className={`hidden-div ${isHidden2 ? "hidden z-2" : ""}`}>
                <div
                  className="absolute w-11/12 h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://file.kelleybluebookimages.com/kbb/base/house/2022/2022-Toyota-Prius%20Prime-FrontSide_TOPRPME2201_640x480.jpg')]
                        bg-cover bg-center blur-md"
                ></div>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <span className="font-zilla font-bold drop-shadow-xl text-white text-xl bottom-0 left-0 text-center">
                  Step 2: Vehicle Information
                </span>
                <span className="font-zilla font-medium text-md drop-shadow-xl text-white text-lg bottom-0 left-0 text-center">
                  {step2Text}
                </span>
              </div>
            </div>
          </div>
          <div className="px-2 mt-2">
            <div
              onClick={handleStep3Click}
              className="w-auto h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://www.bankrate.com/2022/11/09104919/buy-car-or-house-first.jpg?auto=webp&optimize=high&crop=16:9')] bg-cover bg-center"
            >
              <div className={`hidden-div ${isHidden3 ? "hidden z-2" : ""}`}>
                <div
                  className="absolute w-11/12 h-56 outline-black outline-1 border-solid border-2 overflow-hidden rounded-xl shadow-xl bg-[url('https://www.bankrate.com/2022/11/09104919/buy-car-or-house-first.jpg?auto=webp&optimize=high&crop=16:9')]
                        bg-cover bg-center blur-md"
                ></div>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <span className="font-zilla font-bold drop-shadow-lg text-white text-xl bottom-0 left-0 text-center">
                  Step 3: Quote Selection
                </span>
                <span className="font-zilla font-medium drop-shadow-lg text-white text-lg bottom-0 left-0 text-center">
                  {step3Text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
