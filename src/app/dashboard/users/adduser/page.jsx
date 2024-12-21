import React from "react";
import Style from "@/app/_components/dashboard/users/addUser/adduser.module.css";

const page = () => {
  return (
    <div className={Style.container}>
      <form action="" className={Style.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="number" name="number" required />


        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>no</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>no</option>
        </select>
        <textarea
          name="Address"
          id="Address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
