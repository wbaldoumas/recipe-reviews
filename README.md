# Recipes API

A GraphQL API for recipe reviews.

## Deploying to Railway

You can deploy your own copy of this using Railway!

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/w76a0i)

## Running locally

1. Clone the repo.
1. Run the following:

```shell
npm install
npm run dev
```

1. Open up `http://localhost:4002` to access [Apollo Sandbox](https://www.apollographql.com/docs/graphos/explorer/sandbox).

1. Run a few test queries:

```graphql
query ReviewsForRecipe {
  reviewsForRecipe(recipeId: "recOZrH0RhjSjATBp") {
    id
    recipeId
    content
  }
}
```

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).
