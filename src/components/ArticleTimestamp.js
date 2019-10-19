import React from "react";
import { formatDate } from "../utils/formats";
import styles from "./ArticleMeta.module.css";

function ArticleTimestamp({ meta }) {
  return (
    <small className={styles.ArticleMeta}>
      <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
    </small>
  );
}

export default ArticleTimestamp;
