import React, { useEffect, useState } from "react";
import "./index.css";

export const Counter = props => {

  const { finalNumber, duration } = props.data;

  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(finalNumber.substring(0, 3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + finalNumber.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime);

    // dependency array
  }, [finalNumber, duration]);

  return (
    <div id="counter" className="container">
      <div className="row">
        <div className="">
          <p id="value">{count}</p>
        </div>
      </div>
    </div>

  );
};
