import React from "react";
import Style from "./pagination.module.css";
const Pagination = () => {
  return (
    <div className={Style.container}>
      <button className={Style.button} disabled>Prevous</button>
      <button className={Style.button}>Next</button>
    </div>
  );
};

export default Pagination;
