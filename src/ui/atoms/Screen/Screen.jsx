import React, { useState, useEffect } from 'react'

const Screen = () => {
    const [value, setValue] = useState(0)
    
    // useEffect(()=>{
    //     document.querySelector('.screen').value="";
    //     },[])
    //     useEffect(()=>{
    //     if(clear)
    //     document.querySelector('.screen').value="";
    //     })
    return <div className="screen" value={value}>
        {value}
    </div>
}

export default Screen