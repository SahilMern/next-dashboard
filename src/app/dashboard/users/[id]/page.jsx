import React from "react";
import Style from "@/app/_components/dashboard/users/singleuser/Singleuser.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={Style.container}>
      <div className={Style.infoContainer}>
        <div className={Style.imgConatiner}>
          <Image src="/user.jpg" alt="" width={500} height={500} />
        </div>
        JHON DOE
      </div>
      <div className={Style.formContainer}>
        <form action="" className={Style.form}>
          <label htmlFor=""> userName</label>
          <input type="text" name="username" placeholder="jhonDoe" />

          <label htmlFor=""> email</label>
          <input type="email" name="email" placeholder="jhonDoe@" />

          <label htmlFor=""> password</label>
          <input type="password" name="password" placeholder="password" />

          <label htmlFor=""> Phone</label>
          <input type="text" name="username" placeholder="908578574" />

          <label htmlFor=""> Address</label>
          <textarea type="text" name="username" placeholder="New York" />

          <label htmlFor=""> IsAdmin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor=""> IsActive</label>
          <select name="IsActive" id="IsActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
