import React from 'react'
import Screen from '../../atoms/Screen/Screen';
import Buttons from '../Buttons/Buttons';

const Calculator = () => {

    // handleClick = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    //     console.log('hello');
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