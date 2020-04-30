import React from "react";
import "./App.scss";
import Switches from "../components/Switches";
import DrumPads from "../components/DrumPads";
import { connect } from "react-redux";
import { setSoundName, setSwitched, setPower } from "../actions";

const mapStateToProps = (state) => ({
  soundName: state.soundName,
  switched: state.switched,
  power: state.power,
});

const mapDispatchToProps = (dispatch) => ({
  onSoundName: (val) => dispatch(setSoundName(val)),
  onSwitched: (val) => dispatch(setSwitched(val)),
  onPower: (val) => dispatch(setPower(val)),
});

const App = (props) => {
  const { soundName, switched, power, onSoundName, onSwitched, onPower } =
    props;
  const drumClass = power ? "drum-padOn" : "drum-padOff";
  const bank = switched ? bankTwo : bankOne;
  const switchClasses = power
    ? ["displayOn", "lightOn", "On"]
    : ["displayOff", "lightOff", "Off"];
  const bankID = switched ? "bank2" : "bank1";

  const changeName = (name) => {
    onSoundName(name.replace(/-/g, " "));
  };

  const switchBank = () => {
    if (power) {
      onSwitched(!switched);
    }
  };

  const powerSwitch = () => {
    onPower(!power);
    onSoundName("");
  };

  const playSound = (char) => {
    if (power) {
      const sound = document.getElementById(char);
      changeName(bank[char].id);
      sound.currentTime = 0;
      sound.play();
    }
  };

  const handleKey = (char) => (e) => {
    if (e.keyCode === bank[char].kCode) {
      playSound(char);
    }
  };

  return (
    <div id="drum-machine">
      <DrumPads
        drumClass={drumClass}
        bank={bank}
        playSound={playSound}
        handleKey={handleKey}
      />
      <Switches
        soundName={soundName}
        switchClasses={switchClasses}
        bankID={bankID}
        switchBank={switchBank}
        powerSwitch={powerSwitch}
      />
    </div>
  );
};

const bankOne = {
  Q: {
    kCode: 81,
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  W: {
    kCode: 87,
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  E: {
    kCode: 69,
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  A: {
    kCode: 65,
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  S: {
    kCode: 83,
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  D: {
    kCode: 68,
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  Z: {
    kCode: 90,
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  X: {
    kCode: 88,
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  C: {
    kCode: 67,
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
};

const bankTwo = {
  Q: {
    kCode: 81,
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  W: {
    kCode: 87,
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  E: {
    kCode: 69,
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  A: {
    kCode: 65,
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  S: {
    kCode: 83,
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  D: {
    kCode: 68,
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  Z: {
    kCode: 90,
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  X: {
    kCode: 88,
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  C: {
    kCode: 67,
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
