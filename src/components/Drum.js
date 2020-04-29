import React, { useEffect } from "react";

const Drum = ({ char, handleKey, drumClass, bank, playSound }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKey(char)); // handleKey higher-order function
    return () => {
      document.removeEventListener("keydown", handleKey(char));
    };
  }, []);

  return (
    <div className={drumClass} onClick={() => playSound(char)} id={bank[char].id}>
      <div className="light"></div>
      <p>{char}</p>
      <audio src={bank[char].url} className="clip" id={char}></audio>
    </div>
  );
};

export default Drum;
