import React from 'react'
import finn from '../assets/finn.png'

function Footer() {
  return (
    <div className='w-screen h-32 bg-white'>
        <img className=''src={finn}></img>
        <div className='font-zilla text-white text-xl p-2 text-center w-screen h-24 bg-red-600'>Hello my name is Finn. How can I help?</div>
    </div>
  )
}

export default Footer