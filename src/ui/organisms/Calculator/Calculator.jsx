import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  const [value, setValue] = useState('0')
  const [total, setTotal] = useState('')
  const [operand, setOperand] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    const {value} = e.target
    setValue(value);
    if(value === 'AC') {
      setValue('0')
      setTotal('')
      setOperand('')
    } else if (value === '=') {
      let result = eval(total + operand)
      setTotal(result + value)
      console.log(result)
    } else {
      setTotal(value)
    }
    console.log(total)
    
    console.log(value);
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
          <Screen valueProp={value} clickButton={handleClick}/>
        </div>
        <div className="each-button">
          <Buttons clickButton={handleClick}/>
        </div>
      </div>
  )
}



export default Calculator