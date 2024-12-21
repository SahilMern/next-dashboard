import React from "react";
import Style from "./sidebar.module.css";
import menuItem from "@/app/helpers/sidebarlist";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.user}>
        <Image src="/user.jpg" alt="" width="50" height="50" className={Style.userImage} priority={true} />
        <div className={Style.userDetails}>
          <span className={Style.userName}>JHON JOE</span>
          <span className={Style.userTitle}>Administaor</span>
        </div>
      </div>
      <ul className={Style.list}>
        {menuItem.map((cat, key) => (
          <li key={key}>
            <span className={Style.cat}>{cat.title}</span>
            <ul>
              {cat.list.map((item, subKey) => (
                <MenuLink item={item} key={subKey} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button className={Style.logout}>
        <MdLogout />Logout</button>
    </div>
  );
};

export default Sidebar;
