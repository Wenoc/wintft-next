/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlogCard from "../../components/blog/BlogCard";
import styles from "../../styles/blog/Blog.module.css";
import Tag from "../../components/blog/Tag";
import { getPosts } from "../../services";

export default function guides({ posts }) {
  const [kereses, setKereses] = useState("");
  const [actual, setActual] = useState(posts);

  useEffect(() => {
    setActual(
      posts.filter((post) =>
        post.attributes.title.toLowerCase().includes(kereses.toLowerCase())
      )
    );
  }, [kereses]);

  const filterByCategory = (name) => {
    setActual(
      posts.filter(
        (post) =>
          post.attributes.categories.data[1].attributes.name
            .toLowerCase()
            .includes(name.toLowerCase()) ||
          post.attributes.categories.data[0].attributes.name
            .toLowerCase()
            .includes(name.toLowerCase())
      )
    );
  };

  if (!actual) return 0;
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
          <p className={styles.title}>{posts[0].attributes.title}</p>
          <p className={styles.BlogPart}>
            {posts[0].attributes.body.substring(0, 230)}...
          </p>
          <div className={styles.hDown}>
            <p>
              {posts[0].attributes.date} - <span>Hower</span>
            </p>
            <div className={styles.hTagContainer}>
              <span
                onClick={() =>
                  filterByCategory(
                    posts[0].attributes.categories.data[0].attributes.name
                  )
                }
              >
                <Tag
                  name={posts[0].attributes.categories.data[0].attributes.name}
                />
              </span>
              <span
                onClick={() =>
                  filterByCategory(
                    posts[0].attributes.categories.data[1].attributes.name
                  )
                }
              >
                <Tag
                  name={posts[0].attributes.categories.data[1].attributes.name}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <input
          className={styles.SearchBar}
          placeholder="Search"
          value={kereses}
          onChange={(e) => setKereses(e.target.value)}
        />
        <div className={styles.hTagContainer}>
          <span onClick={() => filterByCategory("SET 8")}>
            <Tag name="SET 8" />
          </span>
          <span onClick={() => filterByCategory("News")}>
            <Tag name="News" />
          </span>
          <span onClick={() => filterByCategory("Guide")}>
            <Tag name="Guide" />
          </span>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blogs}>
          {actual.map((post) => (
            <BlogCard
              key={post.id}
              title={post.attributes.title}
              date={post.attributes.date}
              tags={post.attributes.categories}
              url={post.attributes.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
