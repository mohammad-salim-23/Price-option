
import './App.css'
// import DaisyUI from './components/DaisyUI/DaisyUI'
import NavBar from './components/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyUI></DaisyUI> */}
     <PriceOptions></PriceOptions>
      <h1 className='text-7xl bg-rose-500'>Vite + React</h1>
     
    </>
  )
}

export default App
