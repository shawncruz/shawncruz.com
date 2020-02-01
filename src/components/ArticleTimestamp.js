import React from "react";
import styles from "./styles/ArticleTimestamp.module.css";
import { formatDate } from "../utils/formats";

function ArticleTimestamp({ meta }) {
  return (
    <div className={styles.timestamp}>
      <time dateTime={meta.date.toUTCString()}>{formatDate(meta.date)}</time>
    </div>
  );
}

export default ArticleTimestamp;
