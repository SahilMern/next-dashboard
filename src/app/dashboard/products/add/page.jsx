import React from "react";
import Style from "@/app/_components/dashboard/Products/AddProducts/addProducts.module.css";

const page = () => {
  return (
    <div className={Style.container}>
      <form action="" className={Style.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Categoery</option>
          <option value="kiten">Kiten</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="size" name="size" />
        <input type="text" placeholder="color" name="color" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="discription"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
