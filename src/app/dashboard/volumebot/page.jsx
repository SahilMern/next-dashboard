"use client";
import React, { useState, useEffect } from "react";
import Style from "./volume.module.css";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
  const serverPath = "http://localhost:9082";
  const [isBotRunning, setIsBotRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const notify = () => toast("Wow so easy!");
  useEffect(() => {
    // Simulate loading time of 2 seconds
    const timeout = setTimeout(() => {
      const botStatus = localStorage.getItem("botStatus");
      if (botStatus === "running") {
        setIsBotRunning(true);
      } else {
        setIsBotRunning(false);
      }
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleStart = async () => {
    const response = await fetch(`${serverPath}/startBot`);
    const data = await response.json();
    if (data.status === true) {
      setIsBotRunning(true);
      localStorage.setItem("botStatus", "running");
      // alert("Bot started");
      toast.success("BOT STARTED");
    }
  };

  const handleStop = async () => {
    const response = await fetch(`${serverPath}/stopBot`);
    const data = await response.json();
    if (data.status === true) {
      setIsBotRunning(false);
      localStorage.setItem("botStatus", "stopped");
      toast.success("BOT STOPPED");
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.cardsBox}>
        <div className={Style.card}>
          <div className={Style.Image}>
          <Image
            src="/bitmart.png"
            alt="bitmart.png"
            width={200}
            height={200}
            className={Style.bitmartImage}
          />
          </div>
          <div className={Style.content}>
            <h4>Bitmart Volume Bot</h4>
            <p>This bot is used for creating Volume in bitmart exchange.</p>
            <div className={Style.buttonGroup}>
              {isLoading ? (
                <p>Button Loading...</p>
              ) : (
                <>
                  <button
                    className={Style.startbutton}
                    onClick={handleStart}
                    disabled={isBotRunning}
                  >
                    Start
                  </button>
                  <button
                    className={Style.stopbutton}
                    onClick={handleStop}
                    disabled={!isBotRunning}
                  >
                    Stop
                  </button>
                </>
              )}
            </div>
          </div>

          {/* {isLoading ? (
            <p>Button Loading...</p>
          ) : (
            <>
              <button
                className={Style.startbutton}
                onClick={handleStart}
                disabled={isBotRunning}
              >
                Start
              </button>
              <button
                className={Style.stopbutton}
                onClick={handleStop}
                disabled={!isBotRunning}
              >
                Stop
              </button>
            </>
          )} */}
        </div>
        
      </div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
};

export default Page;

// mai chahta hu jab mai start par click karu to  stop button enable ho jaye or start button disable ho jaye or jab stop par click karu to start enable ho jaye or stop button disable ho jaye or iski details local storage mai set ho uske hisab se button enable ho or diable ho or page reffresh karne ke baad bhi vo button enable ho wahi dekh bus or jo diable ho vo na dekhe
