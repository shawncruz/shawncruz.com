import React from "react";
import { View, NotFoundBoundary } from "react-navi";
import NotFoundPage from "./NotFoundPage";
import styles from "./styles/BlogLayout.module.css";
import BlogHeader from "./BlogHeader";
import BlogFooter from "./BlogFooter";

function BlogLayout({ blogRoot }) {
  return (
    <div className={styles.container}>
      <BlogHeader blogRoot={blogRoot} />
      <main>
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
      </main>
      <BlogFooter />
    </div>
  );
}

export default BlogLayout;
