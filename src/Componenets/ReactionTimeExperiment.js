import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import '../style/ReactionTimeExperiment.css'

import audioFile from '../assets/panic-stricken-screaming-1-6880.mp3';

function ReactionTimeExperiment() {
  const [displayTime, setDisplayTime] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);
  const [results, setResults] = useState([]);
  const [numTries, setNumTries] = useState(0);
  const maxTries = 6; // Maximum number of tries
  const triesLeft = maxTries - numTries;
const triesLeftMessage = triesLeft === 1
  ? 'Du hast noch 1 Versuch übrig.'
  : `Sie haben noch ${triesLeft} Versuche übrig.`;

  const audio = new Audio(audioFile);

  useEffect(() => {
    let timeoutId = null;

    if (isWaiting) {
      timeoutId = setTimeout(() => {
        setIsWaiting(false);
        setIsRunning(true);
        setDisplayTime(Date.now());
        if (numTries > maxTries - 4) {
          audio.play();
        }
      }, Math.floor(Math.random() * 4000) + 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isWaiting, numTries]);

  

  function handleStartButtonClick() {
    setIsWaiting(true);
  }

  function handleReactionButtonClick() {
    setIsRunning(false);
    const result = Date.now() - displayTime;
    setReactionTime(result);
    const newResult = {
      tryNumber: results.length + 1,
      reactionTime: result
    };
    setResults([...results, newResult]);
    setNumTries(numTries + 1); // Increment number of tries
    
  }

  function handleDownloadResultsClick() {
    const csvData = Papa.unparse(results);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'reaction-times.csv');
  }

  const images = [    'https://picsum.photos/200',    'https://picsum.photos/200/300',    'https://picsum.photos/300/200',    'https://picsum.photos/300',  ];

  return (
    <div className="container">
    <div className='sous-container' style={{ position: 'relative' }}>
      <h1 className="title ">Experiment zur Reaktionszeit</h1>
      {triesLeftMessage}

    
      {!isWaiting && !isRunning && numTries < maxTries && (
        <button className="button" onClick={handleStartButtonClick}>
          Start
        </button>
      )}
      {isWaiting && !isRunning && <p className="text-color">Machen Sie sich bereit...</p>}
      {isRunning && (
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Visual cue"
          style={{
            top: Math.floor(Math.random() * (window.innerHeight - 200)),
            left: Math.floor(Math.random() * (window.innerWidth - 200)),
            maxWidth: 'calc(100vw - 200px)',
            maxHeight: 'calc(100vh - 200px)',
            width: '200px',
            height: '200px',
          }}
          onClick={handleReactionButtonClick}
        />
      )}
      {reactionTime !== null && results.length < maxTries && (
        <p className="text-color">
          Deine Reaktionszeit war <strong>{reactionTime}</strong> ms.
        </p>
      )}
      {results.length > 0 && numTries === maxTries && (
        <button className="button is-link is-outlined" onClick={handleDownloadResultsClick}>Download-Ergebnisse</button>
      )}
    </div>
    <div>
    {results.length === maxTries && (
  <div className='table-container'>
    <h2>Ergebnisse</h2>
    <table className="table custom-table">
  <thead>
    <tr>
      <th>Versuch</th>
      <th>Reaktionszeit (ms)</th>
    </tr>
  </thead>
  <tbody>
    {results.map((result) => (
      <tr key={result.tryNumber}>
        <td>{result.tryNumber}</td>
        <td>{result.reactionTime}</td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
)}

    </div>
  </div>
  
  );
}

export default ReactionTimeExperiment;
