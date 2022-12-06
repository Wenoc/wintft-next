import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { getPosts } from "../../services";
import styles from "../../styles/blog/PageDetails.module.css";

export const getStaticPaths = async () => {
  const res = (await getPosts()) || [];
  return {
    paths: res.map((path) => ({
      params: { id: path.attributes.url.toString() },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = (await getPosts()) || [];
  const data = res.filter((post) => post.attributes.url === id);
  return {
    props: { data },
  };
}

export default function PageDetails({ data }) {
  return (
    <div className={styles.detailsPage}>
      <p className={styles.smallNav}>
        <Link href="/">Home</Link> {" > "} <Link href="/guides">Guides</Link>
      </p>
      <h1 className={styles.title}>{data[0].attributes.title}</h1>
      <ReactMarkdown className={styles.mainText}>
        {data[0].attributes.body}
      </ReactMarkdown>
    </div>
  );
}
