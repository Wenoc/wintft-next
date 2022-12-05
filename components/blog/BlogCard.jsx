/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import styles from "../../styles/blog/BlogCard.module.css";

export default function BlogCard({ title, date, tags }) {
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
        <h2>{title}</h2>
        <div>
          <div className={styles.CardDetails}>
            <div className={styles.Author}>
              <p>
                {date} - <span>Hower</span>
              </p>
            </div>
          </div>
          <div className={styles.CardTags}>
            {tags.data.map((tag) => (
              <div key={tag.id}>
                <Tag name={tag.attributes.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
