import React from "react";
import { Link, useCurrentRoute, useView } from "react-navi";
import { MDXProvider } from "@mdx-js/react";
import ArticleMeta from "./ArticleMeta";
import styles from "./BlogPostLayout.module.css";
import styles2 from "./BlogIndexPage.module.css";

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute();
  let { connect, content, head } = useView();
  let { MDXComponent, readingTime } = content;

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles2.container}>
        <div className={styles2.fixed + " " + styles2.resourcesToggle}>
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
        <div className={styles2.flexItem}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <Link href={url.pathname}>{title}</Link>
            </h1>
            <ArticleMeta
              blogRoot={blogRoot}
              meta={data}
              readingTime={readingTime}
            />
          </header>
          <MDXProvider
            components={{
              a: Link,
              wrapper: ({ children }) => (
                <div className={styles.content}>{children}</div>
              )
            }}
          >
            <MDXComponent />
          </MDXProvider>

          <footer className={styles.footer}>
            <section className={styles.links}>
              {data.previousDetails && (
                <Link
                  className={styles.previous}
                  href={data.previousDetails.href}
                >
                  ← {data.previousDetails.title}
                </Link>
              )}
              {data.nextDetails && (
                <Link className={styles.next} href={data.nextDetails.href}>
                  {data.nextDetails.title} →
                </Link>
              )}
            </section>
          </footer>
        </div>
      </article>
    </>
  );
}

export default BlogPostLayout;
