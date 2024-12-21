import React from "react";
import Search from "@/app/_components/search/Search";
import Style from "@/app/_components/user/user.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/_components/dashboard/pagination/Pagination";

const page = ({ placeholder }) => {
  return (
    <div className={Style.conatiner}>
      <div className={Style.top}>
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/adduser">
          <button className={Style.addUserButton}>Add New</button>
        </Link>
      </div>
      <table className={Style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Craeted At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Style.user}>
                <Image
                  src=""
                  alt=""
                  width={20}
                  height={20}
                  className={Style.userImage}
                />
                JHON CENA
              </div>
            </td>
            <td>sahil@gmail.com</td>
            <td>13.02.2020</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={Style.buttons}>
                <Link href="/dashboard/users/view">
                  <button className={`${Style.button} ${Style.view} `}>
                    View
                  </button>
                  <button className={`${Style.button} ${Style.delete} `}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default page;
