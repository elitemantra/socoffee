import Link from "next/link";
import React from "react";
import styles  from "./header.module.scss"
export const Header = ({ title = "", tags = false }) => {

    return (
        <header className={styles['header']}>
            <h2 className={styles['title']}>
                {title}
            </h2>
    
            {tags && (
                <div className={styles['tags']}>
                    <Link href="/tag">#tags</Link>
                </div>
            )}
        </header>
  );
};
