import React from "react";
import { Link, useCurrentRoute, useView } from "react-navi";
import { MDXProvider } from "@mdx-js/react";
import styles from "./BlogPostLayout.module.css";
import ArticleTimestamp from "./ArticleTimestamp";

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute();
  let { connect, content, head } = useView();
  let { MDXComponent } = content;

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles.container}>
        <div className={styles.flexItem}>
          <header className={styles.header}>
            <ArticleTimestamp meta={data} />
            <h1 className={styles.title}>
              <Link href={url.pathname}>{title}</Link>
            </h1>
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
