import React, { useState } from 'react';
import { mean, standardDeviation } from 'simple-statistics';
import jstat from 'jstat';
import '../style/Calculate.css'; // Import the CSS file

const Calculate = () => {
  const [dataA, setDataA] = useState('');
  const [dataB, setDataB] = useState('');
  const [meanA, setMeanA] = useState(null);
  const [meanB, setMeanB] = useState(null);
  const [stdDevA, setStdDevA] = useState(null);
  const [stdDevB, setStdDevB] = useState(null);
  const [tStatistic, setTStatistic] = useState(null);
  const [pValue, setPValue] = useState(null);

  const handleDataAChange = (e) => {
    setDataA(e.target.value);
  };

  const handleDataBChange = (e) => {
    setDataB(e.target.value);
  };

  const handleCalculate = () => {
    const dataArrayA = dataA.split(' ').map(Number);
    const dataArrayB = dataB.split(' ').map(Number);

    // Calculate mean
    const meanAValue = mean(dataArrayA);
    const meanBValue = mean(dataArrayB);
    setMeanA(Math.round(meanAValue));
    setMeanB(Math.round(meanBValue));

    // Calculate standard deviation
    const stdDevAValue = standardDeviation(dataArrayA);
    const stdDevBValue = standardDeviation(dataArrayB);
    setStdDevA(Math.round(stdDevAValue));
    setStdDevB(Math.round(stdDevBValue));

    // Perform paired t-test
    const diffArray = dataArrayA.map((value, index) => value - dataArrayB[index]);
    const tValue =
      mean(diffArray) /
      (standardDeviation(diffArray) / Math.sqrt(dataArrayA.length));

    // Calculate p-value based on t-value
    const pValue = 1 - jstat.studentt.cdf(Math.abs(tValue), dataArrayA.length - 1);

    setTStatistic(tValue.toFixed(5));
    setPValue(pValue.toFixed(5));
  };

  return (
    <div className="container">
          <div className='table-container'>

      <div className="input-container">
        <label className="label"> A: </label>
        <input
          type="text"
          value={dataA}
          onChange={handleDataAChange}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label className="label"> B: </label>
        <input
          type="text"
          value={dataB}
          onChange={handleDataBChange}
          className="input-field"
        />
      </div>
      <button onClick={handleCalculate} className="calculate-button">
        Berechnen
      </button>
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Messung</th>
            <th> A</th>
            <th> B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mittelwert</td>
            <td>{meanA}</td>
            <td>{meanB}</td>
          </tr>
          <tr>
            <td>Standardabweichung</td>
            <td>{stdDevA}</td>
            <td>{stdDevB}</td>
          </tr>
          <tr>
            <td>T-Statistik</td>
            <td colSpan="2">{tStatistic}</td>
          </tr>
          <tr>
            <td>P-Wert</td>
            <td colSpan="2">{pValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Calculate;
