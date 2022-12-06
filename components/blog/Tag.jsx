import React, { useEffect, useState } from "react";
import styles from "../../styles/blog/Tag.module.css";

export default function Tag({ name }) {
  const [color, SetColor] = useState("");

  if (name === "SET 8") {
    useEffect(() => {
      SetColor("#686BC4");
    }, [name]);
  } else if (name === "Guide") {
    useEffect(() => {
      SetColor("#3A845F");
    }, [name]);
  } else if (name === "News") {
    useEffect(() => {
      SetColor("#087CA7");
    }, [name]);
  }
  return (
    <div className={styles.BlogTag} style={{ backgroundColor: color }}>
      <span>{name}</span>
    </div>
  );
}
