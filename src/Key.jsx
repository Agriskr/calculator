import React from 'react'

const Key = ({ id, value, handleInput }) => {

    return (
        <button
            id={id}
            value={value}
            onClick={handleInput}>
            {value}
        </button>
    )
}

export default Key