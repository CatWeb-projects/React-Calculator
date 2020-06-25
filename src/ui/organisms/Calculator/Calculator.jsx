import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  const [value, setValue] = useState('0')

  const handleClick = (e) => {
    e.preventDefault();
    const {value} = e.target
    setValue(value);
    if(value === 'AC') {
      setValue('0')
    } else if (value === '=') {
      let equal = eval(value);
      setValue(equal);
    } else if (value === '+') {
      setValue(value)
    }
    console.log(value);
  }


  return (
      <div className="calc-wrapper">
        <div className="screen-wrapper">
          <Screen valueProp={value} clickButton={handleClick}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator