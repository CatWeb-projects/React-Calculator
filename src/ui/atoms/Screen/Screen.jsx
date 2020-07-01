import React from 'react'

const Screen = props =>
	<div className="screen" onChange={props.clickButton}>
		{props.valueProp}
	</div>

export default Screen