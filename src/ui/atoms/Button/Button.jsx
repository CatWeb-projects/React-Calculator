import React from 'react';

export const Button = (props) => {
  const { symbol } = props.buttonProp;
  return (
    <div className="button-wrapper">
      <button value={symbol} onClick={props.clickButton}>
        {symbol}
      </button>
    </div>
  );
};
