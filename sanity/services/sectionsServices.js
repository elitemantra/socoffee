
import { client } from "../lib/client"
// import { getTagRefsFromNames } from "./tagServices"

const getSectionsList = (async () => {
  const query = `
        *[_type == "sections"]{
            section,
            priority,
          _id
        } | order(priority asc)
        `
  const posts = await client.fetch(query)
  return posts
})



export {
    getSectionsList
}