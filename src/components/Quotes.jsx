import report from "../assets/quote.svg"

export default function Quotes() {
  return (
    <div className="relative flex h-72 mt-72 w-screen bg-white justify-center mt-9">
      <div className="flex items-center flex-col w-11/12 shadow-b-lg">
        <div className="ml-4 relative mt-11 ml-2 font-zilla font-medium text-4xl text-red-600 text-left">No mess, no headache. Just savings.</div>
        <div className="align-center mt-4 mb-4 font-zilla font-medium text-2xl text-red-600">3. Quote Estimation</div>
        <div className="align-center mb-2 font-zilla font-medium text-2xl text-red-600"></div>
        <img className="border rounded" src={report} alt="" />
      </div>
    </div>
  );
}
