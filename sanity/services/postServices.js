
import { client } from "../lib/client"
// import { getTagRefsFromNames } from "./tagServices"

const getAllPosts = (async () => {
  const query = `
        *[_type == "post"]{
          title,
          slug,
          publishedAt,
          excerpt,
          body,
          tags,
          _id
        } | order(_createdAt desc)
        `
  const posts = await client.fetch(query)
  return posts
})


const getFeaturedPosts = async (tags) => {
  const query = `
    *[_type == "post" && (references(*[_type == "tag" && name == "featured"]._id))][0...4] {
      title,
      slug,
      "thumbnailUrl" : thumbnail.asset->url,
      publishedAt,
      excerpt,
      body,
      tags,
      _id
    } | order(_createdAt desc)
  `;

  const posts = await client.fetch(query);
  return posts;
};


// takes array of tags
const filterPostsByTags = async (tags) => {
  let tagQuery;

  if (Array.isArray(tags)) {
    // If tags is an array, join the elements into a string
    let jointTagsCondition = tags.map(tag => `name == "${tag}"`).join(' || ');
    tagQuery = `references(*[_type == "tag" && ${jointTagsCondition}]._id)`;
    
  } else {
    // If tags is a string, use it directly
    tagQuery = `references(*[_type == "tag" && name == $tag]._id)`;
    tags = [tags]; // Convert the string to an array for later use
  }
  console.log(tagQuery)
  const query = `
    *[_type == "post" && (${tagQuery})] {
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "thumbnailUrl" : thumbnail.asset->url,
      tags,
      _id
    } | order(_createdAt desc)
  `;

  const posts = await client.fetch(query, { tag: tags[0] });

  // console.log("feat", posts);
  return posts;
};




export {
  getAllPosts,
  filterPostsByTags,
  getFeaturedPosts
}