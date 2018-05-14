import * as express from "express";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import * as next from "next";

const port = parseInt(process.env.PORT, 10) || 4011;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server: express.Application = express();

  if (process.env.NODE_ENV !== "production") {
    server.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
  }

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(
      `> Ready on http://localhost:${port} & http://localhost:${port}/graphiql`
    );
  });
});
