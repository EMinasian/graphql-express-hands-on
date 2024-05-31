const express = require("express");
const expressGraphQL = require('express-graphql').graphqlHTTP
const app = express();
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "test",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "returned test",
      },
    }),
  }),
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Server running on port 5000!");
});
