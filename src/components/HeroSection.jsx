import React from 'react'
import "../App.css";
import Typewriter from "react-typewriter-effect";

export default function HeroSection() {
    return (
      <div className="hero-container">
        <Typewriter
        className='typewriter'
          textStyle={{
            
            color: "white",
            fontWeight: 800,
            marginTop: "100px",
            
          }}
          cursorColor="white"
          hideCursorAfterText
          text="PROBLEM MED BILEN?"
        />
        <Typewriter
          textStyle={{
            color: "white",
            fontWeight: 500,
            fontSize: "1em",
          }}
          cursorColor="white"
          hideCursorAfterText
          startDelay={2100}
          text="Trasig, defekt, motorras..."
        />
        <Typewriter
          textStyle={{
            color: "white",
            fontWeight: 700,
            fontSize: "1.5em",
            marginTop: "20px",
            marginLeft: "90px"
          }}
          cursorColor="white"
          hideCursorAfterText
          startDelay={5000}
          text="VI KÖPER ALLT!"
          typeSpeed={200}
        />
      </div>
    );
}

