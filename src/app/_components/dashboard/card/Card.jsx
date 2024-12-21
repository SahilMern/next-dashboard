import React from "react";
import Style from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={Style.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={Style.texts}>
        <span className={Style.title}>Total user</span>
        <span className={Style.number}>10.273</span>
        <span className={Style.details}>
          <span className={Style.postive}>12% </span>more then privious week
        </span>
      </div>
    </div>
  );
};

export default Card;
