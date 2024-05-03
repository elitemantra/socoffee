
import Link from 'next/link'
import React from 'react'
import styles from "./postComponent.module.scss"

export const PostComponent = ({post}) => {
  console.log("post component",post)
  return (
    <div className={styles['{cardStyle']}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={styles.title}>{post?.title}</h2>
        <p className={styles['date']}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className={styles['excerpt']}>{post?.excerpt}</p>
      </Link>

      <div>
        {post?.tags?.map((tag) => (
          <span key={tag?._id} className={styles.tags}>#{tag?.name}</span>
        ))}
      </div>
    </div>
  )
}


