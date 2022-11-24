import Link from "next/link";
import React from "react";
import style from "../styles/layout.module.css";

const Tagline = () => {
  return (
    <div className={style.tagline}>
        <div className={style.tagcontent}>
            <h2>Stony Brook Finance Society</h2>
            <p>Stony Brook Finance Society</p>
        </div>
    </div>
  );
};

export default Tagline;