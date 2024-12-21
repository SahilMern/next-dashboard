import React from 'react'
import Style from "../_components/login/login.module.css"
const page = () => {
  return (
    <div className={Style.conatiner}>
        <form action="" className={Style.form}>
            <h1>Login</h1>
            <input type="text"  placeholder='username' />
            <input type="password" placeholder='password' />
            <button>login</button>
        </form>
    </div>
  )
}

export default page