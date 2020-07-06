import React from 'react';

export const Screen = (props) => (
  <div className="screen" onChange={props.clickButton}>
    {props.valueProp}
  </div>
);
