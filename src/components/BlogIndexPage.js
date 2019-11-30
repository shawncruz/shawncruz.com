import React from "react";
import { Link } from "react-navi";
import ArticleSummary from "./ArticleSummary";
import Pagination from "./Pagination";
import styles from "./BlogIndexPage.module.css";
import { Timeline } from "react-twitter-widgets";

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.fixed + " " + styles.resourcesToggle}>
          <ul>
            <li>
              <Link href="./about">About Me</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shawncruz">LinkedIn</Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1QEhJX1XRco7yN1OtigMFjY8r0qTUBHLj/view">
                Resume
              </Link>
            </li>
            <li>
              <Link href="https://github.com/shawncruz">Github</Link>
            </li>
          </ul>
        </div>
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
        <div className={styles.timelineItem + " " + styles.timelineToggle}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "shavvncruz"
            }}
            options={{
              height: "400",
              width: "300"
            }}
          />
        </div>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default BlogIndexPage;
