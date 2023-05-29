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
        rating: (Math.random() * 10).toFixed(1),
      });
    }

    return reviews;
  }

  getOverallRatingForRecipe(recipeId) {
    // Using a DataLoader would definitely be recommended here to avoid duplicate calls...
    var reviews = this.getReviewsForRecipe(recipeId);

    var sum = 0;

    for (var i = 0; i < reviews.length; i++) {
      sum += parseFloat(reviews[i].rating);
    }

    return (sum / reviews.length).toFixed(1);
  }
}

module.exports = RecipeReviewsAPI;
