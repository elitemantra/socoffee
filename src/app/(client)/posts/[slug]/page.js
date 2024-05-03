
import { Header } from "@/app/components/header/header";
import { client } from "../../../../../sanity/lib/client";
import { Toc } from "@/app/components/toc/toc";
import { urlForImage } from "../../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import styles from "./page.module.scss"
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getPost(slug) {
    const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

    const post = await client.fetch(query);
    return post;
}

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
}

export const revalidate = 60;

const page = async ({ params }) => {
    const post = await getPost(params?.slug);
    console.log("postfound",post);
    if (!post) {
        notFound();
    }

    return (
        <div>
            <Header title={post?.title} />
            <div className={styles['post']}>
                <span className={styles['date']}>
                    {new Date(post?.publishedAt).toDateString()}
                </span>
                <div className="mt-5">
                    {post?.tags?.map((tag) => (
                        <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
                            <span className={styles.tag}>
                                #{tag.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <Toc headings={post?.headings || post.title} />
                <div className={styles['rich-styles-text']}>
                    <PortableText
                        value={post?.body}
                        components={myPortableTextComponents}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

const myPortableTextComponents = {
    types: {
        image: ({ value }) => (
            <Image
                src={urlForImage(value)}
                alt="Post"
                width={700}
                height={700}
            />
        ),
    },
    block: {
        h2: ({ value }) => (
            <h2
                id={slugify(value.children[0].text)}
                className="text-3xl font-bold mb-3"
            >
                {value.children[0].text}
            </h2>
        ),
        h3: ({ value }) => (
            <h3
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3"
            >
                {value.children[0].text}
            </h3>
        ),
        h4: ({ value }) => (
            <h4
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3"
            >
                {value.children[0].text}
            </h4>
        ),
        h5: ({ value }) => (
            <h5
                id={slugify(value.children[0].text)}
                className="text-2xl font-bold mb-3"
            >
                {value.children[0].text}
            </h5>
        ),
        h6: ({ value }) => (
            <h6
                id={slugify(value.children[0].text)}
                className="text-xl font-bold mb-3"
            >
                {value.children[0].text}
            </h6>
        ),
    },
};
