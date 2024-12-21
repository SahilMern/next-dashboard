"use client"
import React, { useState, useEffect } from "react";
import Style from "./volume.module.css";

const Page = () => {
  // Retrieve initial state from localStorage if available, or default to true
  const [togglebot, setToggleBot] = useState(() => {
    const storedState = localStorage.getItem("togglebot");
    return storedState !== null && storedState !== undefined
      ? JSON.parse(storedState)
      : true;
  });

  useEffect(() => {
    // Store current state in localStorage whenever it changes
    localStorage.setItem("togglebot", JSON.stringify(togglebot));
  }, [togglebot]);

  const handleStart = () => {
    setToggleBot(true);
    setToggleBot(newToggleState);
    localStorage.setItem("togglebot", JSON.stringify(newToggleState)); // Update localStorage
  };

  const handleStop = () => {
    setToggleBot(false);
    localStorage.setItem("togglebot", JSON.stringify(false)); // Update localStorage
  };

  return (
    <div className={Style.container}>
      <div className={Style.cardsBox}>
        <div className={Style.card}>
          {togglebot ? (
            <button onClick={handleStart} className={Style.startbutton}>
              START
            </button>
          ) : (
            <button onClick={handleStop} className={Style.stopbutton}>
              STOP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
