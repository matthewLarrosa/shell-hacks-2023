import car from '../assets/car.jpg'

export default function Breakdown() {

    const imageUrl= {car}
    const title="Card Title 2"
    const description="Description for Card 2."

  return (
    <div className="flex w-screen h-auto p-2">
      <div>
        
        <div className='font-zilla text-left text-black text-2xl'>
          Looking for a quote? We're here to assist you every step of the way.
        </div>
        <div className="flex justify-center border items-center h-screen">
          <div className="max-w-xs rounded-custom overflow-hidden shadow-lg">
            <img className="w-full" src={car} alt={title} />
            <div className="px-4 py-2 bg-white">
              <h2 className="font-bold text-lg mb-2">{title}</h2>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
