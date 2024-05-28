import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //usestate(x): return an array with two value , first variable , second method which controls the variable with default value x
  const [counter, setCounter] = useState(0);
  // let counter = 15; // not change in UI

  const addValue = () => {
    
    // console.log("clicked", counter) // value of counter change but not in UI
    // counter = counter + 1;
    if(counter < 20){
      
      setCounter(counter + 1)

      //send in bathches 
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
     
      //accecpts a callback function => incr by 4
      // setCounter(counter => counter + 1)
      // setCounter(counter => counter + 1)
      // setCounter(counter => counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1)

    }
  }

  return (
    <>
    <h1>Chai aur react </h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value </button>
    <br/>
    <button  onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
