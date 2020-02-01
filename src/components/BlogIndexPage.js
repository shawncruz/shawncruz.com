import React from "react";
import ArticleSummary from "./ArticleSummary";
import Pagination from "./Pagination";
import styles from "./BlogIndexPage.module.css";
import MenuItems from "./MenuItems";

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  document.title = "Home";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerImage}></div>
        <div className={styles.divider}></div>
        <div className={styles.flexItem}>
          <ul className={styles.articlesList}>
            {postRoutes.map(route => (
              <li key={route.url.href}>
                <ArticleSummary blogRoot={blogRoot} route={route} />
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
      </div>

      <footer className={styles.footer}></footer>
    </>
  );
}

export default BlogIndexPage;
