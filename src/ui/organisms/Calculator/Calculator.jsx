import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';
import getButtons from '../Buttons/Buttons'

const Calculator = () => {

  const [value, setValue] = useState('')
  const [total, setTotal] = useState('')
  const [currentValue, setCurrentValue] = useState('0')
  
  const handleClick = (e) => {
    e.preventDefault();
    const {value} = e.target
    const newValue = currentValue + value
    setCurrentValue(newValue)
    if(value === 'AC') {
      setCurrentValue('')
    } else if (getButtons.operators == true) {
      let result = eval(currentValue + e.target.value)
      setCurrentValue(result)
      // console.log(result)
    } else {
      setTotal(value)
    }
    // console.log(total)
    console.log(newValue);
  }

  // const compute = (item) =>{
  //   if(item === 'AC') {
  //     setValue('0')
  //   } else if (item === '=') {
  //     let equal = eval(value);
  //     setValue(equal);
  //   } else {
  //     setValue(value + item)
  //   }
  // }

  return (
      <div className="calc-wrapper">
        <div className="screen-wrapper">
          <input type="text" value={total} onChange={handleClick}/>
          <Screen valueProp={currentValue} clickButton={handleClick}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator