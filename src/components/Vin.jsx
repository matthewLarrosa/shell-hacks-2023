import { useState } from "react";
import axios from "axios";
import car from "../assets/carLineArt.png"

export default function Vin() {
  let title = "";
  const [status, setStatus] = useState("+");

  const handleClick = () => {
    // Update the text when Step 1 card is clicked
    if (status == "+") {
      setStatus("✓");
    }
  };

  const [vin, setVin] = useState("");
  const [carInfo, setCarInfo] = useState(null);

  const fetchCarInfo = async () => {
    try {
      const response = await axios.get(
        `https://zylalabs.com/api/74/vin+decoder+api/139/usa+vin+decoder?vin=${vin}`,
        {
          headers: {
            Authorization:
              "Bearer 2173|AeO7u7dGfEQbKDefR2JzdVyoc4cJkxsU7ZRGOH91",
          },
        }
      );
      // Handle the response data as needed
      setCarInfo(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching car info:", error);
    }
  };

  return (
    <div className="flex h-72 w-screen bg-white justify-center mt-9">
      <div className="flex items-center flex-col w-9/12">
        <div className="font-zilla font-bold text-4xl text-red-600">
          Find my Vehicle.
        </div>
        <div className="align-center mt-4 mb-4 font-zilla font-medium text-2xl text-black text-left">
          2. Vehicle Information
        </div>
        <label htmlFor="Vin"></label>
        <input
          className="border border-red-600 block py2 px-4 w-full rounded focus:outline-gray-400 placeholder-black"
          type="text"
          placeholder="Enter VIN"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
        <div className="font-zilla font-light text-sm ml-11 text-black">
          17 Characters. Ex.4Y1SL65848ZSH2023
        </div>
        <button className="text-center m-4 h-auto px-2 w-auto bg-red-600 rounded-full font-zilla text-lg text-white" onClick={fetchCarInfo}>Submit</button>
        <div>
          <div className="max-w-xs rounded-custom overflow-hidden shadow-lg">
            <img
              className="font-zilla rounded-t-lg w-full text-white"
              src={car}
              alt={title}
              
            />
            <div className="px-4 py-2 bg-red-600 rounded-b-lg">
              <h2 className="font-zilla font-bold text-xl text-white">
                {carInfo?.Make} {carInfo?.Model}
              </h2>
              <p className="font-zilla text-lg text-white mb-2">
                Year: {carInfo?.["Model Year"]}
              </p>
              <p className="font-zilla text-lg text-white mb-2">
                VIN: {carInfo?.VIN}
              </p>
              <button
                className="text-center h-auto p-2 mb-4 w-auto bg-white rounded-full font-zilla text-md text-red-600"
                onClick={handleClick}
              >
                Add Vehicle {status}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
