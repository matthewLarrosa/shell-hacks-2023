import React from 'react'

export default function Assist() {
  return (
    <div className="flex h-auto w-screen bg-white justify-center">
      <div className="flex items-center flex-col w-9/12">
      <div className="ml-4 relative mt-11 ml-2 font-zilla font-bold text-4xl text-red-500 text-left">Need assistance?</div>
      <div className="flex space-x-4">
      <form className="px-4 my-6 max-w-3xl mx-auto space-y-6">
        <div>
        <h1 className="align-center mb-4 font-zilla font-medium text-2xl text-black text-left">Try our new AI assistant Finn!</h1>
        </div>
        <div class="flex-row">
          
          <div class="w-full mt-4">
          
          <label for="question"></label>
          <input
          placeholder='Ask me a question!'
          className="border border-black block py2 px-4 w-full rounded focus:outline-gray-400 placeholder-black"
          type="text"
          name="question"
          id="question"
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

