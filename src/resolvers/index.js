const { Query } = require("./Query");
const { RecipeReview } = require("./RecipeReview");
const { Recipe } = require("./Recipe");

const resolvers = {
  Query,
  RecipeReview,
  Recipe
};

module.exports = resolvers;
