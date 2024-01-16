import { useState } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import Display from './Display';
import keyData from './data';




function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState('0');


  const handleInput = (value) => {
    console.log(value)
    setInput(value);


  };

  return (
    <>
      <div className='container'>
        <h1>FCC Calculator </h1>

        <Display output={output} input={input} />

        <Keyboard handleInput={handleInput} />

        <p className='signature'>by AK</p>

      </div>


    </>
  )
}

export default App
