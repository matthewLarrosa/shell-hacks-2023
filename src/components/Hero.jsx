import largeLogo from "../assets/largeLogo.png";

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col w-9/12">
        <img className="m-2 p-2 h-32 w-32" src={largeLogo} alt="large logo" />
        <div>Hello Neighbor,</div>
        <div>type.js</div>
        <div>
          <button>Arrow button down</button>
        </div>
      </div>
    </div>
  );
}
