import React from 'react'

const Screen = props => {

    return <div className="screen" onChange={props.clickButton}>
        {props.valueProp}
    </div>
}

export default Screen