import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typing from "../Animations/Typing";
import Button from "../Forms/Button";
import "./styles.scss";

const Greeting = () => {
  const history = useHistory();
  const [styles, setStyles] = useState("");

  const typicalConfig = {
    text: "Driven, Motivated, and Intuitive Software Development",
    time: 50,
    backspace: 0,
  };

  const unmountDelay = 500;

  const unmountStyle = {
    style: {
      animation: `exit linear ${unmountDelay}ms 1 alternate`,
    },
  };

  const handleClick = () => {
    setStyles(unmountStyle);
    setTimeout(() => {
      history.push("/home");
    }, unmountDelay);
  };

  return (
    <div className="greeting" {...styles}>
      <div className="wrap">
        <h1 className="name">James Jager</h1>
        <Typing {...typicalConfig} />
        <Button onClick={handleClick}>Learn More</Button>
      </div>
    </div>
  );
};

export default Greeting;
