import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = 
  {
    name:"sneha",
    age:18
  }

  let newArr = [1,2,3];

  return (
    <>
       <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
      Hello world!
    </h1>
    <Card username ="Sneha" btnText="Click Me"/>
    
    

    
    </>
  )
}

export default App
