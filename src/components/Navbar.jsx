import logo from "../assets/stateFarmLogo.png";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="bg-white border-b border-gray-700 w-9/12 h-11">
        <div className="flex flex-row">
          <img className="p-2 mt-2 h-9 md:w-44" src={logo} alt="logo" />
          <div className="p-2 mt-2 font-zilla">Online Quoting</div>
        </div>
      </div>
    </div>
  );
}
