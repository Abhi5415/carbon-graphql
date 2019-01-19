const express = require("express");
const graphqlHTTP = require("express-graphl");

const app = express();
const port = 4000; // to be moved to config

app.use("/graphql", graphqlHTTP({}));

app.listen(port, () => {
  console.log(`Listening on port ${4000}`);
});
