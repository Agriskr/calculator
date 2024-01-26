
import { useEffect, useState } from 'react'
import React from 'react'
import Key from './Key.jsx'
import keyData from './data.jsx'
import Display from './Display';

const Keyboard = () => {

    const [input, setInput] = useState('0');
    const [output, setOutput] = useState(" ");
    const [solved, setSolved] = useState(false)

    const isOperator = (value) => {
        return /[-+\/*]/.test(value)
    }
    const isNumber = (value) => {
        return /[0-9]/.test(value)
    }
    const handleClear = () => {
        setInput("0");
        setOutput("");
        setSolved(false);

    };

    const handleInput = (event) => {
        const value = event.target.value;

        if (input === "0" && !solved) {
            setInput(value)
        } else {
            setInput(`${input}${value}`)
        }
        if (solved && isNumber(value)) {
            setInput(value)
            setSolved(false)
        }
        if (value === "AC") {
            handleClear()
        }
        if (isOperator(value)) {
            handleOperator(value)
        }
        if (value === "=") {
            if (input === "0") {
                setInput("0")
            } else {
                handleEqual();
            }
        }
        if (value === ".") {
            handleDot()
        }
    }


    const handleDot = () => {
        const lastNum = input.split(/[-+\/*]/g).pop();

        if (solved && isNumber(lastNum)) {
            console.log(' iegaju te pie dot. ', input)
            setInput("0.")
            setSolved(false)
        } else {
            if (input === "0") {
                setInput("0.")
            } if (isOperator(input.charAt(input.length - 1))) {
                setInput(input + "0.")
            } else {
                setInput(lastNum.includes(".") ? `${input}` : `${input}.`)
            }
        }
    }


    const handleOperator = (value) => {

        let lastChar = input.charAt(input.length - 1);
        let secondLastChar = input.charAt(input.length - 2);
        if (solved) {
            setSolved(false)
        }
        if (input === "0") {
            setInput("0");
        }
        if (isOperator(lastChar) || lastChar === ".") {
            setInput(input.replace(/.$/, `${value}`))
        }
        if (lastChar === "-" && value === "-") {
            setInput(input)
        }
        if (isOperator(lastChar) && lastChar !== "-" && value === "-") {
            setInput(`${input}${value}`)
        }
        if ((isOperator(secondLastChar) && isOperator(lastChar)) && isOperator(value)) {
            setInput(`${input.substring(0, input.length - 2)}${value}`)
        }
    }

    const handleEqual = () => {
        let expression = input;
        expression = expression.replace(/[-+\/*]+$/, "");
        let result = eval(expression).toString();
        setInput(result);
        setOutput(expression + "=" + result);
        setSolved(true);
    }


    return (

        <>
            <Display input={input} output={output} />

            <div className='keyboard'>
                {keyData.map((keyData) => (
                    <Key key={keyData.value}
                        id={keyData.id}
                        value={keyData.value}
                        handleInput={handleInput}
                    />
                ))}

            </div>
        </>
    )
}

export default Keyboard