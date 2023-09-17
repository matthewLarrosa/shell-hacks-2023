import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Breakdown from '../src/components/Breakdown'
import GetStarted from '../src/components/GetStarted'
<<<<<<< Updated upstream
import Vin from '../src/components/Vin'
=======
import Assist from './components/Assist'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Breakdown />
    <GetStarted />
<<<<<<< Updated upstream
    <Vin />
=======
    <Assist />
>>>>>>> Stashed changes
  </React.StrictMode>,
)
