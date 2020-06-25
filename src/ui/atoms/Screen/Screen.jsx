import React, { useState, useEffect } from 'react'

const Screen = props => {

    return <div className="screen" onChange={props.operations}>
        {props.valueProp}
    </div>
}

export default Screen