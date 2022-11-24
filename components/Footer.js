import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Stony Brook Finance Society
        </a>
    </footer>
  );
};

export default Footer;