import React from "react";
import { Link } from "react-navi";
import styles from "./styles/ArticleSummary.module.css";
import ArticleTimestamp from "./ArticleTimestamp";

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <ArticleTimestamp meta={route.data} />
      <h2>
        <Link href={route.url.href}>{route.title}</Link>
      </h2>
      <p>{route.data.spoiler}</p>
    </article>
  );
}

export default ArticleSummary;
