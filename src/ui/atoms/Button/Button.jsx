import React from 'react'

const Button = (props) => {
    return (
        <div className="button-wrapper">
            <button>{props.symbol}</button>
        </div>
    )
}

export default Button