import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      power: true,
      switch: false,
      soundName: ' '
    }
    this.changeName = this.changeName.bind(this);
    this.switchBank = this.switchBank.bind(this);
    this.powerSwitch = this.powerSwitch.bind(this);
  }
  changeName(name){
    this.setState({
      soundName: name.replace(/-/g,' ')
    });
  }
  switchBank(){
    if(this.state.power){
       this.setState({
        switch: !this.state.switch
      });
    }
  }
  powerSwitch(){
    this.setState({
      power: !this.state.power,
      soundName: ' '
    });
  }
  render(){
    let arr = ['Q','W','E','A','S','D','Z','X','C'];
    let DrumPads = arr.map((a) => <Drums bank={this.state.switch} letters={a} newName={this.changeName} power={this.state.power}/>);
    return (
             <div id='drum-machine'>
               <div id="drums">{DrumPads}</div>
               <Functionality name={this.state.soundName} 
                 bank={this.state.switch}
                 switch={this.switchBank}
                 power={this.state.power}
                 powerSwitch={this.powerSwitch} />
             </div>
    );
  }
}

const Functionality = (props) => {
  let onClasses = props.power? ['displayOn', 'lightOn','On']: ['displayOff', 'lightOff','Off'];
  let bank = props.bank ? 'bank2': 'bank1';
  return (
    <div id="functionality">
      <p id={onClasses[0]}>{props.name}</p>
      <div id="bank" onClick={props.switch}>
        <span>Bank Switch</span>
        <div id="bank-switch">
          <div id={bank}></div>
        </div>
      </div>
      <div id="power" onClick={props.powerSwitch}>{onClasses[2]}<div className={onClasses[1]}></div></div>
    </div>
  );
}

class Drums extends React.Component{
  constructor(props){
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.playSound = this.playSound.bind(this);
  } 
  playSound(){
    if(this.props.power){
      let sound = document.getElementById(this.props.letters);
      this.props.newName(this.Bank[this.props.letters].id);
      sound.currentTime = 0;
      sound.play();
    }
  }
  handleKey(e){
    if(e.keyCode === this.Bank[this.props.letters].kCode){
      this.playSound();
    }
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKey);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKey);
  }
  render(){
    let onClasses = this.props.power? 'drum-padOn': 'drum-padOff';
    this.Bank = this.props.bank? bankTwo: bankOne; 
    return(
      <div className={onClasses} onClick={this.playSound} id={this.Bank[this.props.letters].id}>
        <div className="light"></div>
        <p>{this.props.letters}</p>
        <audio src={this.Bank[this.props.letters].url} className="clip"  id={this.props.letters}></audio>
      </div>
    );
  } 
}


const bankOne = {
  'Q':{ kCode: 81, id: 'Heater-1', url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  'W':{ kCode: 87, id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  'E':{ kCode: 69, id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  'A':{ kCode: 65, id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  'S':{ kCode: 83, id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  'D':{ kCode: 68, id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  'Z':{ kCode: 90, id: "Kick-n'-Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  'X':{ kCode: 88, id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  'C':{ kCode: 67, id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  };

const bankTwo = {
  'Q':{ kCode: 81, id: 'Chord-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
  'W':{ kCode: 87, id: 'Chord-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},
  'E':{ kCode: 69, id: 'Chord-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'},
  'A':{ kCode: 65, id: 'Shaker', url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},
  'S':{ kCode: 83, id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
  'D':{ kCode: 68, id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
  'Z':{ kCode: 90, id: 'Punchy-Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
  'X':{ kCode: 88, id: 'Side-Stick', url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
  'C':{ kCode: 67, id: 'Snare', url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
  };




export default App;
