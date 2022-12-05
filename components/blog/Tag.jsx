import React, { useEffect, useState } from "react";
import styles from "../../styles/blog/Tag.module.css";

export default function Tag({ name }) {
  const [color, SetColor] = useState("#657ED4");

  if (name === "SET 8") {
    useEffect(() => {
      SetColor("#607B7D");
    }, [name]);
  } else if (name === "Guide") {
    useEffect(() => {
      SetColor("#608738");
    }, [name]);
  }
  return (
    <div className={styles.BlogTag} style={{ backgroundColor: color }}>
      <span>{name}</span>
    </div>
  );
}
