import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  const [value, setValue] = useState(0)
  const [clear,setClear] = useState(false);

  /* Calculator operations */
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => a / b

  const handleClick = (e) => {
    e.preventDefault();
    const {value} = e.target
    setValue(value)
    console.log(value);
  }

  return (
      <div className="calc-wrapper">
        <div className="screen-wrapper">
          <Screen value={value} onChange={e=> setValue(e.target.value)}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator