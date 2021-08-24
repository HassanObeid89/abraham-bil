import React from 'react'
import "../App.css";
import Typewriter from "react-typewriter-effect";

function HeroSection() {
    return (
      <div className="hero-container">
        <Typewriter
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "white",
            fontWeight: 500,
            fontSize: "1.5em",
            marginLeft: "15px",
          }}
          cursorColor="white"
          hideCursorAfterText
          text="PROBLEM MED BILEN?"
          // multiText={[
          //   "PROBLEM MED BILEN?",
          //   "Trasig, defekt, Motorras...",
          //   "Vi köper alt!",
          //   "Gratis värdering inom 1 timme.",
          // ]}
          // multiTextDelay={100}
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
            color: "lightGray",
            fontWeight: 500,
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

export default HeroSection;
