"use client";
import React from "react";
import Style from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName, "pathname in navbar");
  return (
    <div className={Style.container}>
      <div className={Style.title}>{pathName.split("/").pop()}</div>
      <div className={Style.menu}>
        {/* search input  */}
        <div className={Style.search}>
          <MdSearch />
          <input
            type="search"
            name=""
            id=""
            placeholder="search..."
            className={Style.input}
          />
        </div>

        <div className={Style.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
