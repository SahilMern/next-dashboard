import React from "react";
import Style from "./transaction.module.css";
import Image from "next/image";
const Transaction = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>Latest transtion</div>
      <table className={Style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {/* First row */}
          <tr>
            <td>
              <div className={Style.user}>
                <Image
                  src="/user.jpg"
                  width={40}
                  height={40}
                  alt="userImag"
                  className={Style.userImage}
                />
                Jhon Cena
              </div>
            </td>
            <td>
              <span className={`${Style.status} ${Style.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>
          {/* Second Row */}
          <tr>
            <td>
            <div className={Style.user}>
                <Image
                  src="/user.jpg"
                  width={40}
                  height={40}
                  alt="userImag"
                  className={Style.userImage}
                />
                Jhon Cena
              </div>
            </td>
            <td>
              <span className={`${Style.status} ${Style.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>
          {/* Third Row */}
          <tr>
            <td>
            <div className={Style.user}>
                <Image
                  src="/user.jpg"
                  width={40}
                  height={40}
                  alt="userImag"
                  className={Style.userImage}
                />
                Jhon Cena
              </div>
            </td>
            <td>
              <span className={`${Style.status} ${Style.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
