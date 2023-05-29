module.exports = {
  Query: {
    reviewsForRecipe(_, { recipeId }, { dataSources }) {
      return dataSources.recipeReviewsAPI.getReviewsForRecipe(recipeId);
    },
  },
};
