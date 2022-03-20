import React from 'react';
import menu from "../styles/Menu.module.css";
import { FaHome, FaUser, FaTools } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { BiBook } from "react-icons/bi";
import Link from 'next/link';

function Menu() {
  return (
    <>
    <div className={menu.section}>
        <div>
          <Link href='/'><FaHome  className={menu.menuitem}/></Link>
        </div>
        <div>
          <Link href='/question'><FaTools  className={menu.menuitem}/></Link>
        </div>        
        <div>
          <Link href='/blog'><BiBook  className={menu.menuitem}/></Link>          
        </div>
        <div>
          <Link href='/about'><FaUser  className={menu.menuitem}/></Link>          
        </div>
        <div>
          <Link href='/contact'><SiGooglemessages  className={menu.menuitem}/></Link>         
        </div>
    </div> 
    </>
  )
}

export default Menu;