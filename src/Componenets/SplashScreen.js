import React, { useEffect } from 'react';
import '../style/SplashScreen.css';



import splashVideo from '../assets/Across_The_Universe.mp4';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Replace "next-page" with the path to the next page
      window.location.href = '/Home';
    }, 15000);
    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="SplashScreen">
      <video
        src={splashVideo}
        autoPlay
        loop
        muted
        className="SplashScreen-video"
      />
      <div className="Skip-button" onClick={() => window.location.href = '/Home'}>
  Skip
</div>
    </div>
  );
}
