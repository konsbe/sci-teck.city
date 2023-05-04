import React from "react";
import styles from "@/src/styles/blog.module.css";
import "./blog.css";

// const Blogs = dynamic(() => import("@/src/components/Blogs"));
import Blogs from "@/src/components/Blogs";

function Blog() {
  return (
    <div className="body-container">
      <div className="blog-container">
        <div className={styles.container}>
          <div className={styles.bodyContainer}>
            <div className={styles.gridContainer}>
              <div>
                <div className={styles.containerForm}>
                  {/* <BlogForm className={styles.containerForm} /> */}
                </div>
                <div className={styles.containerBlog}>
                  <Blogs className={styles.containerBlog} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;