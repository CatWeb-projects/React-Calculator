import React, {useState} from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  //   console.log(e.currentTarget.value);
  // }

  // const [buttonState, buttonClick] = useState()

  // const handleClick = () => {
  //   console.log('1')
  // }

  return (
      <div className="calc-wrapper">
        <div className="screen-wrapper">
          <Screen />
        </div>
        <div className="each-button">
          <Buttons />
        </div>
      </div>
  )
}



export default Calculator