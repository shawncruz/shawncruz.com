import React from "react";
import ArticleSummary from "./ArticleSummary";
import Pagination from "./Pagination";
import styles from "./styles/BlogIndexPage.module.css";

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexItem}>
          <ul className={styles.articlesList}>
            {postRoutes.map((route) => (
              <li key={route.url.href}>
                <ArticleSummary route={route} />
              </li>
            ))}
          </ul>
          {pageCount > 1 && (
            <Pagination
              blogRoot={blogRoot}
              pageCount={pageCount}
              pageNumber={pageNumber}
            />
          )}
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export default BlogIndexPage;
