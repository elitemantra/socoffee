import { longFormArticle } from "./schemas/longFormArticle";
import{ recipeArticle} from "./schemas/recipeArticle";
import { tag } from "./schemas/tag";
import { category } from "./schemas/category";
// import { sections } from "./schemas/sections";

export const schema = {
  types: [
    // sections,
    longFormArticle,
    tag,
    category,
    recipeArticle
  ],
}
