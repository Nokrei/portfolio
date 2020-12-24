import React, { useState, useEffect } from 'react';
import useInterval from './useInterval';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(props.delay);
  

  useEffect(() => {
    if (count >= props.max) {
      setDelay(99999999999999999999);
    }
  },[count]);

  useInterval(() => {
    // Your custom logic here
    setCount(count + props.inc);
  }, delay);

  return ( 
      <div><div className='statPage--number'>{count}{props.text}</div><br></br>{props.text2}</div>
  );
};

export default Counter;
