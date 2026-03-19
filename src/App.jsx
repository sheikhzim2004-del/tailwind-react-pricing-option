
import { Suspense } from 'react'
import './App.css'
import DaisiNav from './components/DaisiNav/DaisiNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOption/PricingOption'



const pricingPromiss = fetch('pricingData.json').then(res => res.json());
// console.log(pricingPromiss)

function App() {


  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisiNav></DaisiNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <PricingOption pricingPromiss={pricingPromiss}></PricingOption>
        </Suspense>
      </main>
    </>
  )
}

export default App
