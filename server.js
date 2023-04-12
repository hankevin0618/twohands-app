import { ApolloServer } from "apollo-server";
import schema from "./schema.js";

const server = new ApolloServer({
  schema,
});

const PORT = 4000;
server
  .listen(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}/`));