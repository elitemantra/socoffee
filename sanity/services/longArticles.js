import { client } from "../lib/client";

const getLongArticleList = async () => {
  const data = await client.fetch(`*[_type == "longFormArticle"]{
    ...,
    author[]-> { ... },
    tags[]-> { ... },
    category-> { ... }
  }`);
  return data;
};

export { getLongArticleList };
