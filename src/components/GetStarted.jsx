
export default function GetStarted() {
  return (
    <div className="flex h-auto w-screen bg-red-600 justify-center">
      <div className="flex items-center flex-col w-9/12">
      <div className="ml-4 relative mt-11 ml-2 font-zilla font-medium text-4xl text-white text-left">Let's get started on your personal insurance quote.</div>
      <div className="flex space-x-4">
      <form className="px-4 my-6 max-w-3xl mx-auto space-y-6">
        <div>
        <h1 className="align-center mb-4 font-zilla font-medium text-2xl text-white text-left">1. Personal Information</h1>
        </div>
        <div className="flex-row">
          
          <p className="font-zilla text-white text-xl font-medium">Tell us about yourself!</p>
          <div className="w-full mt-4">
          
          <label htmlFor="firstname"></label>
          <input
          placeholder='First Name'
          className="border border-white block py2 px-4 w-full rounded focus:outline-gray-400 placeholder-black"
          type="text"
          name="firstname"
          id="firstname"
        />
          </div>
          <div className="w-full mt-4">
          
          <label htmlFor="lastname"></label>
          <input
          placeholder='Last Name'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="lastname"
          id="lastname"
        />
          </div>
          <div className="w-full mt-4 mb-4">
          
          <label htmlFor="middleinitial"></label>
          <input
          placeholder='MI*'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="middleinitial"
          id="middleinitial"
        />
          </div>


          <p className="font-zilla text-white text-xl font-medium">Tell us where you live!</p>
      {/*
      suffix dropdown here
      */}

          <div className="w-full mt-4">
          
          <label htmlFor="streetaddress"></label>
          <input
          placeholder='Street Address'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="streetaddress"
          id="streetaddress"
        />
          </div>
          <div className="w-full mt-4">
          
          <label htmlFor="apt"></label>
          <input
          placeholder='Apt/Unit*'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="apt"
          id="apt"
        />
          </div>
          <div className="w-full mt-4">
          
          <label htmlFor="city"></label>
          <input
          placeholder='City'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="city"
          id="city"
        />
          </div>

          {/*

          dropdown for state here
          */}
          <div className="w-full mt-4">
          
          <label htmlFor="zipcode"></label>
          <input
          placeholder='ZIP Code'
          className="border border-white block py2 px-4 w-full rounded placeholder-black"
          type="text"
          name="zipcode"
          id="zipcode"
        />
          </div>



        </div>








      </form>
    
    
    
    {/*
        <input class="row-span-1 mr-2 bg-full h-12 px-6 mb-10 relative text-lg text-gray-700 placeholder-gray-600 border rounded-full focus:shadow-outline" type="text" placeholder="First Name:"/>        
        <input class="col-span-2 mr-2 bg-full h-12 px-6 mb-10 relative text-lg text-gray-700 placeholder-gray-600 border rounded-full focus:shadow-outline" type="text" placeholder="Middle Initial:"/>        
        <input class="row-span-2 col-span-2 mr-2 bg-full h-12 px-6 mb-10 relative text-lg text-gray-700 placeholder-gray-600 border rounded-full focus:shadow-outline" type="text" placeholder="Last Name:"/>        
  */}
        </div>
      </div>
    </div>
  )
}