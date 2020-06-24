import React, {useState} from 'react'


const Button = props => {
    const {symbol} = props.buttonProp
    const [count, setCount] = useState()

    /* Calculator operations */
    const add = (a, b) => a + b
    const subtract = (a, b) => a - b
    const multiply = (a, b) => a * b
    const divide = (a, b) => a / b



    const handleClick = (e) => {
        e.preventDefault();
        const {value} = e.target
        if(value === 'AC') {
            return e.target.value = '0'
        } else if (value === '+') {
            return add()
        }
		console.log(value);
	}
 
    return (
        <div className="button-wrapper">
            <button value={symbol} onClick={handleClick}>{symbol}</button>
        </div>
    )
}

export default Button