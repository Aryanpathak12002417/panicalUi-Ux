import { useState } from 'react'
import Hero from './Component/Hero'
import AboutUs from './Component/AboutUs'
import Testimonial from './Component/Testimonial'
import Service from './Component/Service'
import Feature from './Component/feature'
import Commitment from './Component/Commitment'
import Download from './Component/Download'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <AboutUs/>
     <Testimonial/>
     <Service/>
     <Feature/>
     <Commitment/>
     <Download/>
     <Footer/>
    </>
  )
}

export default App
