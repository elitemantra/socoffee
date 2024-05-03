import {client} from "../lib/client"

const getTagRefsFromNames = (async(tags = [])=>{
    console.log(tags)
    const tagRefs = await Promise.all(
    tags.map(async tagName => {
        const tagQuery = `*[_type == "tag" && name == $tagName][0]`;
        const tag = await client.fetch(tagQuery, { tagName });
        // Check if the tag exists
        if (tag) {
            return tag._id;
        } else {
            console.warn(`Tag '${tagName}' does not exist.`);
            return;
        }
    }))
    return tagRefs;
})

export {
    getTagRefsFromNames
} 