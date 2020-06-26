import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  const [value, setValue] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  const handleClick = (e, key) => {
    e.preventDefault();
    const {value} = e.target
      if (currentValue[currentValue.length -1 ]=== value) return 0


    const newValue = currentValue + value
    setCurrentValue(newValue)
    if(['+', '-', '*', '/', '.'].includes(newValue[newValue.length -1])) {
      // setCurrentValue(currentValue[currentValue.length - 1] + newValue[newValue.length -1] )
        
        
      
    } else if (value == '=') {
      let result = eval(currentValue)
      setCurrentValue(result)
      console.log(result)
      console.log(currentValue)
    }  else {
      value === 'AC' ? setCurrentValue('') : setCurrentValue(newValue)
    }
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
          <Screen valueProp={currentValue} clickButton={handleClick}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator
