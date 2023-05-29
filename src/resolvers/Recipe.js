module.exports = {
  Recipe: {
    reviews: ({ id }, _, { dataSources }) => {
      return dataSources.recipeReviewsAPI.getReviewsForRecipe(id);
    },
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.recipeReviewsAPI.getOverallRatingForRecipe(id);
    },
  },
};
