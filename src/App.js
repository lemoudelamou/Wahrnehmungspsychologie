import React, { useState, useEffect } from 'react';
import './App.css';
import ReactionTimeExperiment from './ReactionTimeExperiment';
import Navbar from './Navbar';
import SplashScreen from './SplashScreen';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




export default function App() {
  const [activeTab, setActiveTab] = useState('splash');
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setActiveTab('home');
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {activeTab !== 'splash' && (
        <Navbar activeTab={activeTab} handleTabClick={handleTabClick} />
      )}
      <header className="App-header">
        {isLoading && (
          <SplashScreen />
        )}
        {!isLoading && activeTab === 'home' && (
          <Home />
        )}  
        {!isLoading && activeTab === 'experiment' && (
          <ReactionTimeExperiment />
        )}
        {!isLoading && activeTab === 'results' && (
          <div className="results-container">
            <p>No results yet.</p>
          </div>
        )}
      </header>
    </div>
  );
}
