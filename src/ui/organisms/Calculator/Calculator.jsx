import React, {useState} from 'react'
import {Screen} from '../../atoms/Screen/Screen';
import {Buttons} from '../Buttons/Buttons';

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('')
  const handleClick = (e) => {
  e.preventDefault();
  const operators = ['+', '-', '*', '/', '.']
  const {value} = e.target
  const newValue = currentValue + value
  if(e.target.value === '<') {
    let back = newValue.substring(0, newValue.length - 2)
    return setCurrentValue(back)
  }
  if(operators.includes(newValue[newValue.length - 1])) {
    if(!operators.includes(currentValue[currentValue.length - 1])) {
      // eslint-ignore-next-line
      let conc = eval(currentValue)
      if(operators.includes(newValue)) {
        return newValue[newValue.length - 1]
      } else setCurrentValue(conc + newValue[newValue.length - 1])
    } else {
      let check = currentValue.substring(0, currentValue.length - 1) + value
      setCurrentValue(check)
    }
    } else if (value === '=') {  
      if(operators.includes(currentValue[currentValue.length - 1]) && value === '=') {
        let checkEqual = newValue.substring(0, newValue.length - 2) + currentValue[currentValue.length - 1]
        setCurrentValue(checkEqual)
      } else {
        // eslint-ignore-next-line
        let result = eval(currentValue)
        setCurrentValue(result)
      }
    } else if(value === 'AC') {
      setCurrentValue('')
    } else setCurrentValue(newValue)
  }

  return (
    <div className="calc-wrapper">
      <div className="screen-wrapper">
        <Screen valueProp={currentValue} clickButton={handleClick}/>
      </div>
      <div className="each-button">
        <Buttons clickButton={handleClick}/>
      </div>
    </div>
  )
}
