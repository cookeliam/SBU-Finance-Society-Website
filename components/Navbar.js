import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import style from "../styles/layout.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <Link href={"/"}><Image className={style.logo} width="320" height="100" src='/../public/logo.png'></Image></Link>
    </nav>
  );
};

export default Navbar;