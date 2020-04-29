import React from "react";
import Drum from "./Drum";

const DrumPads = ({ playSound, handleKey, drumClass, bank }) => {
  const str = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  return (
    <div id="drums">
      {str.map((char, i) => (
        <Drum
          drumClass={drumClass}
          bank={bank}
          playSound={playSound}
          char={char}
          handleKey={handleKey}
          key={i}
        />
      ))}
    </div>
  );
};

export default DrumPads;
