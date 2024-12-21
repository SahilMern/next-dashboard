import React from "react";
import Style from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={Style.container}>
      {/* box 1 */}
      <div className={Style.item}>
        <div className={Style.bgContainer}>
          <Image
            src="/rocket.jpg"
            width={120}
            height={120}
            className={Style.bg}
            alt=""
          />
        </div>
        <div className={Style.texts}>
          <span className={Style.head}>🔥Available now </span>
          <h3 className={Style.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={Style.subtitle}>Take 4 minutes to learn</span>
          <p className={Style.notification}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis.
          </p>
          <button className={Style.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

        {/* box 2 */}
        <div className={Style.item}>
        <div className={Style.bgContainer}>
          {/* <Image
            src="/rocket.jpg"
            width={20}
            height={20}
            className={Style.userCo}
            alt=""
          /> */}
        </div>
        <div className={Style.texts}>
          <span className={Style.head}>🔥Available now </span>
          <h3 className={Style.title}>
            How to use the new version of the admin dashboard
          </h3>
          <span className={Style.subtitle}>Take 4 minutes to learn</span>
          <p className={Style.notification}>
          Lorem ipsum, dolor sit amet conse ctetur adipisicing elit. Facilis.
          </p>
          <button className={Style.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
