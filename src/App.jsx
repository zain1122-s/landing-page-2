import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import Services from './component/service/Services'
import Pricing from './component/pricing/Pricing'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Pricing/>
    </div>
  )
}

export default App
