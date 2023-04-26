// gGluehbirne icon : https://www.flaticon.com/de/kostenlose-icons/lampe


import React from 'react';
import '../style/Rules.css';
import Lampe from '../assets/lampe.png';

function Rules() {
  return (
    <div className='container'>
      <div className="rules-container">
        <div className="logo-container">
          <img src={Lampe} alt="Logo" className="logo" />
        </div>
        <h1 className="rules-title">Wie funktioniert es?</h1>
        <h3>Um an diesem Reaktionszeit-Experiment teilzunehmen, befolgen Sie bitte diese Schritte:</h3>
        <ul className="rules-steps">
          <li className="rules-steps-item">Klicken Sie auf die Schaltfläche "Start", um das Experiment zu beginnen.</li>
          <li className="rules-steps-item">Seien Sie bereit und warten Sie auf das Signal.</li>
          <li className="rules-steps-item">Sobald das Bild erscheint, klicken Sie so schnell wie möglich darauf.</li>
          <li className="rules-steps-item">Wiederholen Sie dies, bis Sie die maximale Anzahl von Versuchen erreicht haben.</li>
        </ul> 
        <button onClick={event =>  window.location.href='/Experiment'}>Start</button>
      </div> 
    </div>
  );
}

export default Rules;
