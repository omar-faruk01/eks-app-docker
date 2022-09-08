import React, { useState } from 'react';
import './App.css';

function App() {
  const [quarter, setQuarter] = useState(null);
  const [vals, setVals] = useState(null);
  const [valsPTD, setValsPTD] = useState(null);
  const [valsYTD, setValsYTD] = useState(null);
  const [si, setSi] = useState(null), [siPTD, setSiPTD] = useState(null), [siYTD, setSiYTD] = useState(null);
  const [isv, setIsv] = useState(null), [isvPTD, setIsvPTD] = useState(null), [isvYTD, setIsvYTD] = useState(null);
  const [stratEnablement, setStratEnablement] = useState(null), [stratEnablementPTD, setStratEnablementPTD] = useState(null), [stratEnablementYTD, setStratEnablementYTD] = useState(null);
  const [content, setContent] = useState(null), [contentPTD, setContentPTD] = useState(null), [contentYTD, setContentYTD] = useState(null);
  const [support, setSupport] = useState(null), [supportPTD, setSupportPTD] = useState(null), [supportYTD, setSupportYTD] = useState(null);
  const [speaking, setSpeaking] = useState(null), [speakingPTD, setSpeakingPTD] = useState(null), [speakingYTD, setSpeakingYTD] = useState(null);
  

  const calculateGoals = () => {
   setValsPTD((vals / ( 21 * quarter / 100)).toFixed(2));
   setValsYTD((vals/84*100).toFixed(2));
   setSiPTD((si / ( 3 * quarter / 100)).toFixed(2));
   setSiYTD((si/12).toFixed(2));
   setIsvPTD((isv / ( 5.5 * quarter / 100)).toFixed(2));
   setIsvYTD((isv/22*100).toFixed(2));
   setStratEnablementPTD((stratEnablement / ( 2 * quarter / 100)).toFixed(2));
   setStratEnablement((stratEnablement/8*100).toFixed(2));
   setContentPTD((content / ( 1 * quarter / 100)).toFixed(2));
   setContentYTD((content/4*100).toFixed(2));
   setSupportPTD((support / ( 2 * quarter / 100)).toFixed(2));
   setSupportYTD((support/8*100).toFixed(2));
   setSpeakingPTD((speaking / ( 1 * quarter / 100)).toFixed(2));
   setSpeakingYTD((speaking/4*100).toFixed(2));
  }
  
  return (
    <div className="App">
      <h1> Scale PSA Quarterly Goals Calculator</h1>
      
      <div>
      <label>Quarter </label>
      <input value={quarter} onChange={(e) => setQuarter(e.target.value)}/>
      </div>
      
      <div>
      <label>Technical Validations </label>
      <input value={vals} onChange={(e) => setVals(e.target.value)}/>
      </div>
      
      <div>
      <label>SI Practice Improvements </label>
      <input value={si} onChange={(e) => setSi(e.target.value)}/>
      </div>
      
      <div>
      <label>DW – ISV Remediations </label>
      <input value={isv} onChange={(e) => setIsv(e.target.value)}/>
      </div>
      
      <div>
      <label>Strategic Enablement </label>
      <input value={stratEnablement} onChange={(e) => setStratEnablement(e.target.value)}/>
      </div>
      
      <div>
      <label>Technical Content </label>
      <input value={content} onChange={(e) => setContent(e.target.value)}/>
      </div>
      
      <div>
      <label>Event Support </label>
      <input value={support} onChange={(e) => setSupport(e.target.value)}/>
      </div>
      
      <div>
      <label>Public Speaking </label>
      <input value={speaking} onChange={(e) => setSpeaking(e.target.value)}/>
      </div>
      
      <div>
      <button onClick={calculateGoals}>Submit</button>
      </div>
      
      <span> 
      You goals for the quarter are: <br></br>
      Technical Validations: {valsPTD} % PTD, {valsYTD} % YTD <br></br>
      SI Practice Improvements: {siPTD} % PTD, {siYTD} % YTD <br></br>
      DW - ISV Remediations: {isvPTD} % PTD, {isvYTD} % YTD <br></br>
      Strategic Enablement: {stratEnablementPTD} PTD, {stratEnablementYTD} YTD <br></br>
      Technical Content: {contentPTD} % PTD, {contentYTD} % YTD <br></br>
      Event Support: {supportPTD} % PTD, {supportYTD} % YTD <br></br>
      Public Speaking: {speakingPTD} % PTD, {speakingYTD} % YTD <br></br>
      </span>
      
    </div>
  );
}

export default App;
