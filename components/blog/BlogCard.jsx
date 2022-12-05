/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import styles from "../../styles/blog/BlogCard.module.css";

export default function BlogCard() {
  return (
    <div className={styles.Card}>
      <Link href="/">
        <div className={styles.imgContainer}>
          <Image
            src="/BlogBackgrounds/1a.webp"
            width="350"
            height="196"
            alt="blog image"
            priority
          />
        </div>
      </Link>
      <div className={styles.CardContent}>
        <h2>How to play reroll kai'sa like a challenger</h2>
        <div>
          <div className={styles.CardDetails}>
            <div className={styles.Author}>
              <p>
                November 19, 2022 - <span>Hower</span>
              </p>
            </div>
          </div>
          <div className={styles.CardTags}>
            <Tag />
            <Tag />
          </div>
        </div>
      </div>
    </div>
  );
}
