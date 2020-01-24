import React from "react";
import "./style.css";

function GameBoard(props) {
  return <div className="GameBoard">{props.children}</div>;
}

export default GameBoard;