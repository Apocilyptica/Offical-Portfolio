import React, { useEffect, useRef, useState } from "react";

const Typing = (props) => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  useEffect(() => {
    const timer = count < props.text.length && prevCount <= count && setInterval(() => setCount(count + 1), props.time);
    return () => {
      clearInterval(timer);
      clearInterval(timerDelete);
    };
  }, [count]);

  const timerDelete = count === props.text.length && setInterval(() => setCount(props.text.length - props.backspace), props.time);

  return <div className="typicalWrapper">{props.text.slice(0, [count])}</div>;
};

export default Typing;
