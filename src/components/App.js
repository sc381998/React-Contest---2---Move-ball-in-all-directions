import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position: "absolute"
  });
  //const [style, setStyle] = useState(ballPosition);
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px",
      position: "absolute"
    });
  };
  const start = () => {
    setRenderBall(true);
  };
  const handleUserKeyPress = (event) => {
    console.log(event.key);
    let newx = x;
    let newy = y;
    if (event.keyCode === 39) {
      newx = x + 5;
      setX(newx);
    } else if (event.keyCode === 37) {
      newx = x - 5;
      setX(newx);
    } else if (event.keyCode === 38) {
      newy = y - 5;
      setY(newy);
    } else if (event.keyCode === 40) {
      newy = y + 5;
      setY(newy);
    }
    console.log(x + " " + y);
    setBallPosition({
      left: `${newx}px`,
      top: `${newy}px`,
      position: `absolute`
    });
  };
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const renderChoice = () => {
    if (!renderBall) {
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
    } else return <div style={ballPosition} className="ball"></div>;
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
