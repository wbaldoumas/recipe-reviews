class RecipeReviewsAPI {
  getReviewsForRecipe(recipeId) {
    const reviews = [];
    const numberOfReviews = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < numberOfReviews; i++) {
      const id = Math.random();

      let content;
      switch (id.toString().length % 3) {
        case 0:
          content = "This recipe was great!";
          break;
        case 1:
          content = "This recipe was okay!";
          break;
        case 2:
          content = "This recipe was terrible!";
          break;
      }

      reviews.push({
        id: id.toString(36).substr(2, 9),
        recipeId,
        content: content,
      });
    }

    return reviews;
  }
}

module.exports = RecipeReviewsAPI;
