import React from 'react'


const Button = props => {
    const {symbol, clickButton} = props.buttonProp

    return (
        <div className="button-wrapper">
            <button value={symbol} onClick={clickButton}>{symbol}</button>
        </div>
    )
}

export default Button