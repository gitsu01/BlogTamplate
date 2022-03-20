import React, { useState } from "react";
import head from "../styles/Header.module.css";
import Button from "./Button";
import p from "../project.json";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={head.header}>
        <div className={head.navigation}>
          <div className={head.tihead}>
            <Link href="/" key={'titlehead01'}>
              <div className={head.title}>{p.domain}</div>
            </Link>
          </div>
          <Button>
            <Link href="/search" key={'Searchmain'}>
              <BiSearch />
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
