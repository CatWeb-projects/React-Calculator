import React from 'react'


const Button = props => {
	const {symbol} = props.buttonProp
	return (
		<div className="button-wrapper">
			<button value={symbol} onClick={props.clickButton}>{symbol}</button>
		</div>
	)
}

export default Button