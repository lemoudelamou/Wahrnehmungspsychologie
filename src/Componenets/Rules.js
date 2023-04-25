import React from 'react';
import '../style/Rules.css';

function Rules() {
  return (
    <div className='container'>
    <div className="rules-container">
      <h1 className="rules-title">Reaktionszeit-Experiment</h1>
      <p>Um an diesem Reaktionszeit-Experiment teilzunehmen, befolgen Sie bitte diese Schritte:</p>
      <ul className="rules-steps">
        <li className="rules-steps-item">Klicken Sie auf die Schaltfläche "Start", um das Experiment zu beginnen.</li>
        <li className="rules-steps-item">Seien Sie bereit und warten Sie auf das Signal.</li>
        <li className="rules-steps-item">Sobald das Bild erscheint, klicken Sie so schnell wie möglich darauf.</li>
        <li className="rules-steps-item">Wiederholen Sie dies, bis Sie das Experiment abgeschlossen haben oder die maximale Anzahl von Versuchen erreicht haben.</li>
      </ul> 
      <button onClick={event =>  window.location.href='/Experiment'}>Start</button>
    </div> 
    </div>
  );
}

export default Rules;
