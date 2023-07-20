import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RangeCalendar } from 'componenttest';

function App() {
  return (
    <div className="">
    <RangeCalendar aria-label="Trip dates" 
      btnBackground="yellow"
      btnStyles={{padding:"10px"}}
      headreStyle={{color:"blue"}}
      weekColor="purple"
      weekStyles={{padding:"8px"}}
      cellBackground="rgba(0,0,255,0.5)"
      cellBackgroundSelected="pink"
      cellStyles={{padding:"8px"}}
      />
    </div>
  );
}

export default App;
