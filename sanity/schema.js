import { longFormArticle } from "./schemas/longFormArticle";
import { recipeArticle } from "./schemas/recipeArticle";
import { tag } from "./schemas/tag";
import { category } from "./schemas/category";
import { author } from "./schemas/author";
import { brewBarVideo } from "./schemas/brewBarVideo";
import { company } from "./schemas/company";
import { people } from "./schemas/people";
import { influencer } from "./schemas/influencer";
import { founder } from "./schemas/founder";
// import { sections } from "./schemas/sections";

export const schema = {
  types: [
    // sections,
    longFormArticle,
    tag,
    category,
    recipeArticle,
    author,
    brewBarVideo,
    company,
    people,
    influencer,
    founder,
  ],
};
