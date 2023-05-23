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
import SignUp from './Componenets/SignUp'
import SignIn from './Componenets/SignIn'
import Calculate from './Componenets/Calculate';


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
        <Route path="/" exact={true} element={<SplashScreen/>}/>
        <Route path="/Experiment" element={<ReactionTimeExperiment />}/>
          <Route path="/SignUp"  element={<SignUp />}/>
          <Route path="/SignIn"  element={<SignIn />}/>
          <Route path="/Home"  element={<Home />}/>
        <Route path="/Rules" element={<Rules />}/>
        <Route path="/Calculate" element={<Calculate />}/>

      </Routes>
      {location.pathname === '/' ? null : <Footer/>}

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
