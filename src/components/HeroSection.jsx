import React from 'react'
import "../App.css";
import Typewriter from "react-typewriter-effect";

export default function HeroSection() {
    return (
      <div className="hero-container">
        <Typewriter
          textStyle={{
            
            color: "white",
            fontWeight: 800,
            fontSize: "1.5em",
            marginLeft: "15px",
            marginTop: "100px"
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
            marginLeft: "15px",
          }}
          cursorColor="white"
          hideCursorAfterText
          startDelay={2100}
          text="Trasig, defekt, Motorras..."
        />
        <Typewriter
          textStyle={{
            color: "white",
            fontWeight: 700,
            fontSize: "1.5em",
            marginLeft: "15px",
            marginTop: "20px",
          }}
          cursorColor="white"
          hideCursorAfterText
          startDelay={5000}
          text="VI KÖPER ALT!"
          typeSpeed={200}
        />
      </div>
    );
}

