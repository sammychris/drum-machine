import React from "react";

const Switches = ({
  switchClasses,
  bankID,
  soundName,
  switchBank,
  powerSwitch,
}) => {
  return (
    <div id="functionality">
      <p id={switchClasses[0]}>{soundName}</p>
      <div id="bank" onClick={switchBank}>
        <span>Bank Switch</span>
        <div id="bank-switch">
          <div id={bankID}></div>
        </div>
      </div>
      <div id="power" onClick={powerSwitch}>
        {switchClasses[2]}
        <div className={switchClasses[1]}></div>
      </div>
    </div>
  );
};

export default Switches;
