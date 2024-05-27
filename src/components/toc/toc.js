import React from "react";
import styles from "./toc.module.scss"
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}

export const Toc = ({ headings }) =>{ 
    console.log(headings , "toc headings")
    return (
    <div className={styles['toc-wrapper']}>
        <h2 className={styles['toc-header']}>
            Table of Contents
        </h2>
        <nav>
            <ul>
                {headings?.map((heading) => (
                    <li key={heading?._key} >
                        <a
                            className=""
                            href={`#${slugify(heading.children[0].text)}`}
                        >
                            {heading.children[0].text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);}
