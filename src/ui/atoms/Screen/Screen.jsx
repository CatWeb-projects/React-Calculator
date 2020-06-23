import React, { useState } from 'react'

 function Screen() {
     const [count, setCount] = useState(0)
    return <div className="screen">
        {count}
    </div>
}

export default Screen