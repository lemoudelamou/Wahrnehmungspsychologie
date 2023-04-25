// home icon: https://www.flaticon.com/free-icons/home-button" 
// wie funktioniert es? icon: https://www.flaticon.com/free-icons/expertise
// experiment icon: https://www.flaticon.com/free-icons/experiment



import React, {useRef} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import '../style/Navbar.css';
import Logo from '../assets/logo.png'
import Home from '../assets/home.png'
import Wie from '../assets/wiefunktioniert.png'
import Flask from '../assets/flask.png'



export default function Navbar({ activeTab, handleTabClick }) {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <header className='navbar-fixed'>
		<img className='' src={Logo}/>
      <nav ref={navRef}>

	<div>
		<img className='home-tab' src={Home}/>
        <a className={activeTab === 'home' ? 'active' : ''} onClick={event =>  window.location.href='/Home'}>Home</a>
	</div>
	<div>
		<img className='experiment-tab' src={Flask}/>
        <a className={activeTab === 'experiment' ? 'active' : ''} onClick={event =>  window.location.href='/Experiment'}>Experiment</a>
    </div>    
	<div>
		<img className='wie-tab' src={Wie}/>
        <a className={activeTab === 'results' ? 'active' : ''} onClick={event =>  window.location.href='/Rules'}>Wie funktioniert es?</a>
    </div>      
      <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
    </nav>

    <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  );
}


