import React from "react";
import head from "../styles/Header.module.css";
import Search from "./Search";
import Button from "./Button";
import p from "../project.json";
import { RiMenuAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
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
      <header className={head.header}>
        <div className={head.navigation}>
          <div className={head.tihead}>
            <Button>
              <RiMenuAddFill />
            </Button>
            <Link href="/">
              <div className={head.title}>{p.domain}</div>
            </Link>
          </div>
          <div className={head.bardiv}>
            <div>
              <Search>Serach Anythingh</Search>
            </div>
            <Button>
              <BiSearch />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
