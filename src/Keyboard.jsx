import React from 'react'
import Key from './Key.jsx'
import keyData from './data.jsx'


const Keyboard = ({ handleInput }) => {

    return (
        <div className='keyboard'>
            {keyData.map((keyData) => (
                <Key key={keyData.value}
                    id={keyData.id}
                    value={keyData.value}
                    handleInput={handleInput}
                />
            ))}

        </div>
    )
}

export default Keyboard