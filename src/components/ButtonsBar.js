import React from "react";
import './ButtonsBar.css';

export const ButtonsBar = (props) => {
  const { onLeftButtonClick, onRightButtonClick } = props;

  return (
    <div className="buttonsBar" >
      <div className="buttonsContainer">
        <button onClick={onLeftButtonClick} className="buttonStyle">left</button>
        <div className="buttonsSeparator"></div>
        <button onClick={onRightButtonClick} className="buttonStyle">right</button>
      </div>
    </div>
  );
};