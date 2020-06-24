import React, { useState } from 'react'

 const Screen = () => {
    const [count, setCount] = useState(0)
    return <div className="screen">
        {count}
    </div>
}

export default Screen