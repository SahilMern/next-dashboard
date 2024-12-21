import React from "react";
import Card from "../_components/dashboard/card/Card";
import Style from "../_components/dashboard/dashboard.module.css";
import Rightbar from "../_components/dashboard/rightbar/Rightbar";
import Transaction from "../_components/dashboard/transaction/Transaction";
import Chart from "../_components/dashboard/chart/Chart";

const page = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.main}>
        <div className={Style.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      <div className={Style.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default page;
