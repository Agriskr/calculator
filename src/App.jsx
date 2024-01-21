import { useState } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import Display from './Display';





function App() {
  const [input, setInput] = useState('0');
  //const [output, setOutput] = useState('');
  //const [display, setDisplay] = useState('0')

  const isOperator = (value) => {
    return /[*/+-]/.test(value)
  }

  const handleInput = (event) => {
    const value = event.target.textContent;

    if (input === '0') {
      setInput(value)
    } else {
      setInput(input + value)
    }
    if (value === "AC") {
      handleClear()
    }
    if (isOperator(value)) {
      handleOperator(value)
    }
    if (value === "=") {
      if (isOperator(input.charAt(input.length - 1))) {
        setInput(input);
      } else {
        handleEqual();
      }
    }
    if (value === ".") {
      handleDot()
    }
  }


  const handleDot = () => {
    const lastNum = input.split(/[-+/*]/g).pop();
    console.log(`lastNum: ${lastNum}`)
    if (input === '0') {
      setInput('0.')
    } if (isOperator(input.charAt(input.length - 1))) {
      setInput(`${input}` + '0.')
    }
    else {
      setInput(lastNum.includes('.') ? `${input}` : `${input}.`)
    }
  }

  const handleOperator = (value) => {
    const lastChar = input.charAt(input.length - 1)
    console.log(`operatora value ir: ${lastChar}`)
    if (!isOperator(lastChar)) {
      setInput(input + value)
    }

    if (isOperator(input.charAt(input.length - 1))) {
      setInput(input.replace(/.$/, `!`))
    }
  }

  const handleClear = () => {
    setInput('0');

  };
  const handleEqual = () => {
    console.log(input)
    setInput(eval(input))

  }




  return (
    <>
      <div className='container'>
        <h1>FCC Calculator </h1>

        <Display input={input} />

        <Keyboard handleInput={handleInput} />

        <p className='signature'>by AK</p>

      </div>


    </>
  )
}

export default App
