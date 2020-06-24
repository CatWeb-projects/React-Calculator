import React from 'react'


const Button = props => {
    const {symbol} = props.buttonProp
    console.log(props)
    return (
        <div className="button-wrapper">
            <button>{symbol}</button>
        </div>
    )
}

export default Button