/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © 2022 Copyright: WinTFT.com. WinTFT.com isn't endorsed by Riot Games
        and doesn't reflect the views or opinions of Riot Games or anyone
        officially involved in producing or managing League of Legends. League
        of Legends and Riot Games are trademarks or registered trademarks of
        Riot Games, Inc.
      </p>
    </footer>
  );
}
