import React from 'react'
import Style from "./search.module.css"
import { MdSearch } from 'react-icons/md';

const Search = ({placeholder}) => {
  return (
    <div className={Style.container}>
        <MdSearch /> 
        <input type="text" placeholder={placeholder} className={Style.input} />
    </div>
  )
}

export default Search;