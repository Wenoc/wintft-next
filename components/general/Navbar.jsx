import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        <Link href="/">
          <Image src="/nav.png" alt="wintft logo" width={150} height={56} />
        </Link>
        <Link className={styles.link} href="/guides">
          Guides
        </Link>
      </div>
    </nav>
  );
}
