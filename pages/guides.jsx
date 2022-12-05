/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import BlogCard from "../components/blog/BlogCard";
import styles from "../styles/blog/Blog.module.css";
import Tag from "../components/blog/Tag";
import SearchBar from "../components/general/SearchBar";

export default function guides() {
  return (
    <div className={styles.BlogPage}>
      <div className={styles.Highlighted}>
        <Image
          className={styles.hImg}
          src="/BlogBackgrounds/1a.webp"
          width="500"
          height="280"
          alt="blog image"
        />
        <div className={styles.HighlightContent}>
          <p className={styles.title}>
            TFT Set 8: Monsters Attack! A First Look at the Threat Trait and
            Champions
          </p>
          <p className={styles.BlogPart}>
            A new set always brings us lots and lots of new synergies to learn
            and master, but more isn’t always better. Threats, a new type of
            unit in TFT Set 8, are a clear example of this.but more isn’t always
            better. Threats, a new type of unit in...
          </p>
          <div className={styles.hDown}>
            <p>
              November 18, 2022 - <span>Hower</span>
            </p>
            <div className={styles.hTagContainer}>
              <Tag />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <SearchBar />
        <div className={styles.hTagContainer}>
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blogs}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
