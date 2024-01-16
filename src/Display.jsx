import React from 'react'

const Display = ({ input, output }) => {
    return (
        <div className='display' id="display">
            <div className='output'>{output}</div>
            <div className='input'>{input}</div>
        </div>
    )
}

export default Display