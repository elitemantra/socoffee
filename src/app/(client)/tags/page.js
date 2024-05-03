import { Header } from "@/app/components/header/header";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss"

async function getAllTags() {
    const query = `
    *[_type == "tag"] {
        name,
        slug,
        _id,
        "postCount": count(*[_type == "post" && references("tags", ^._id)])
    }
    `;
    const tags = await client.fetch(query); 
    return tags;
}

const page = async () => {
    const tags = await getAllTags();
  
    return (
        <div>
            <Header title="Tags" tags />
            <div>
                {tags?.length > 0 &&
                    tags?.map((tag) => (
                        <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
                            <div className={styles['tag']}>
                                #{tag.name} ({tag?.postCount})
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default page;