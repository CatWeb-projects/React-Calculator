import React, { useState, useEffect } from 'react'
import handleClick from '../Button/Button'

 const Screen = () => {
    const [value, setValue] = useState(0)
    const [clear,setClear]=useState(false);
    useEffect(()=>{
        document.querySelector('.screen').value="";
      },[])
      useEffect(()=>{
        if(clear)
        document.querySelector('.screen').value="";
      })
    return <div className="screen" onChange={handleClick}>
        {value}
    </div>
}

export default Screen