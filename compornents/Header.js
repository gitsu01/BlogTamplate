import React from "react";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import p from "../project.json";
import { RiMenuAddFill } from "react-icons/ri";
import Link from "next/link";

function Header() {
  const Nav = [
    {
      _id: "#01",
      name: "Home",
      link: "/",
    },
    {
      _id: "#02",
      name: `Blog's`,
      link: "/blogs",
    },
    {
      _id: "#03",
      name: "About",
      link: "/about",
    },
    {
      _id: "#04",
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <Link href='/'>
            <div className={styles.title}>{p.name}</div>
          </Link>
          <div className={styles.bardiv}>
            <div>
              <Search>Serach Anythingh</Search>
            </div>
            <RiMenuAddFill className={styles.bar} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
