import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Breakdown from '../src/components/Breakdown'
import GetStarted from '../src/components/GetStarted'
import Vin from '../src/components/Vin'
import Assist from './components/Assist'
import Quotes from './components/Quotes'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Breakdown />
    <GetStarted />
    <Vin />
    <Quotes />
    <Assist/>
    <Footer />
  </React.StrictMode>,





)
