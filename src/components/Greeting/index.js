import React from "react";
import Typing from "../Animations/Typing";
import "./styles.scss";

const Greeting = () => {
  const typicalConfig = {
    text: "Driven, Motivated, and Intuitive Software Development",
    time: 50,
    backspace: 0,
  };

  return (
    <div className="greeting">
      <div className="wrap">
        <h1 className="name">James Jager</h1>
        <Typing {...typicalConfig} />
      </div>
    </div>
  );
};

export default Greeting;
