import { join } from "path";
import React from "react";
import { Link } from "react-navi";
import { formatDate } from "../utils/formats";
import styles from "./ArticleMeta.module.css";

function ArticleTags({ blogRoot, meta }) {
  return (
    <small className={styles.ArticleMeta}>
      {meta.tags && meta.tags.length && (
        <>
          {" "}
          <ul className={styles.tags}>
            {meta.tags.map(tag => (
              <li key={tag}>
                <Link href={join(blogRoot, "tags", tag)}>{tag}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </small>
  );
}

export default ArticleTags;
