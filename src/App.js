
import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

   const[display, setDisplay] = useState('')

  useEffect(()=>{

    document.addEventListener('keydown',(event)=>{

      audioHandler(event.key.toUpperCase())});

  });


      
    

  const drumpads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const audioHandler=(selector)=>{

    const audio = document.getElementById(selector);

    setDisplay(selector)

    audio.play()
  }

  
  
  return (
    <div className="App">

      <div id='drum-machine'>
        <div id='display'>{display}</div>
       <div className='drum-pads'>

        {drumpads.map((drumpad)=>(<div onClick={()=>audioHandler(drumpad.text)} key={drumpad.src} id={drumpad.src} className='drum-pad'>{drumpad.text}
        
        <audio className='clip' src={drumpad.src} id={drumpad.text}></audio>
        </div>))}

       </div>
      </div>
      
       </div>
  );
}

export default App;
