import React from "react";
import styles from "../../styles/SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className="c">
      <input className={styles.SearchBar} placeholder="Search" />
    </div>
  );
}
