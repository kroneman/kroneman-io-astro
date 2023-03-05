import React from "react";
import FormattedDate from '../FormattedDate';

import styles from "./BlogPost.module.scss";

type BlogPostProps = {
  title: string;
  heroImage?: string;
  pubDate?: Date;
  updatedDate?: Date;
  children: React.ReactNode | React.ReactNode[];
};

const BlogPost = (props: BlogPostProps) => {
  const { title, heroImage, pubDate, updatedDate, children } = props;

  return (
    <article className={styles.BlogPost}>
      {heroImage && <img width={720} height={360} src={heroImage} alt="" />}
      <h1 class={styles.Title}>
        {title}
      </h1>
      <FormattedDate date={pubDate} />
      {updatedDate &&
        <div className={styles.LastUpdated}>
          Last updated on <FormattedDate date={updatedDate} />
        </div>}
      <hr />
      {children}
    </article>
  );
};

export default BlogPost;