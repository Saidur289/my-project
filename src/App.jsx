
import './App.css'
import Navbar from './components/daisyNev/Navbar'
import LineChart from './components/lineChart/LineChart'
import Phones from './components/phones/Phones'
import PriceOption from './components/PriceOption/PriceOption'
// import DaisyNev from './components/daisyNev/DaisyNev'

function App() {
  

  return (
    <>
     
      <Navbar></Navbar>
       {/* <DaisyNev></DaisyNev> */}
      {/* <h1 className='text-5xl bg-rose-500'>Vite + React</h1> */}

     <PriceOption></PriceOption>
     <LineChart></LineChart>
     <Phones></Phones>     
    </>
  )
}

export default App
