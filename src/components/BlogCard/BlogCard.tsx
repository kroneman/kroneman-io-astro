import React from 'react';
import classNames from 'classnames';

import FormattedDate from '../FormattedDate';

import styles from './BlogCard.module.scss';

type BlogCardProps = {
  datePublished?: Date;
  href?: string;
  title?: string;
  description?: string;
  className?: string;
};

const BlogCard = (props: BlogCardProps) => {
  const { datePublished, href, title, description, className } = props;
  const blogCardClassNames = classNames(styles.BlogCard, className);

  return (
    <article className={blogCardClassNames}>
      <a href={href}>
        <h1>{title}</h1>
        <FormattedDate date={datePublished} className={styles.BlogDate} />
        <p className={styles.BlogDescription}>{description}</p>
      </a>
    </article>
  );
};

export default BlogCard;
