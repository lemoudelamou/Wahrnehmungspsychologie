import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactionTimeExperiment from './Componenets/ReactionTimeExperiment';
import Navbar from './Componenets/Navbar';
import SplashScreen from './Componenets/SplashScreen';
import Home from './Componenets/Home';
import Rules from './Componenets/Rules';
import Footer from './Componenets/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

function AppRouter() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' ? null : <Navbar/>}
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/Experiment" element={<ReactionTimeExperiment />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Rules" element={<Rules />}/>
      </Routes>
      {location.pathname === '/' ? null : <Footer/>}

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
