import React from 'react'
import styles from "../styles/Index.module.css";

const Search = (props) =>  {
  return (
    <input type='search' placeholder={props.children} className={styles.search}></input>
  )
}

export default Search;