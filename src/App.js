import React, { useState, useEffect, useRef } from 'react';
import './App.css';

//https://www.youtube.com/watch?v=OzUHZGOk0kA
//sourceytlink

function App() {
  const [result,setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(()=> inputRef.current.focus());


  function handleClick(e)
  {
    setResult(result.concat(e.target.name))
  }

  function backSpace()
  {
    setResult(result.slice(0,result.length-1))
  }

  function clear()
  {
    setResult("")
  }
   
  function calculate()
  {
    try
    {
      setResult(eval(result).toString());
    }
    catch(error)
    {
      setResult("ERROR!!")
    }
  }

  return (
    <div className="calc-app">
      {/* <h1>Calculator using React-Hooks</h1> */}
      <from>
        <input type="text" placeholder="ENTER" value={result} ref={inputRef}/>
      </from>
       
      <div className="keypad">
        <button id="clear" onClick={clear}>Clear</button>
        <button id="backspace" onClick={backSpace}>←</button>
        <button className="operations" name="+" onClick={handleClick}>+</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="operations"name="-" onClick={handleClick}>-</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="operations" name="*" onClick={handleClick}>&times;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="operations" name="/" onClick={handleClick}>/</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button id="result" onClick={calculate}>Result</button>
      </div>
    </div>
  );
}

export default App;
