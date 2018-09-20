import * as express from "express";
import * as next from "next";

const session = require("express-session");

const port = parseInt(process.env.PORT, 10) || 4011;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

export interface Request extends express.Request {
  session: any;
}

app.prepare().then(() => {
  const server: express.Application = express();

  server.use(
    session({
      secret: "AvailproAndFastbooking",
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 3600 * 4 } // 4 hours sessions
    })
  );

  server.get("/group/:id", (req, res) => {
    // Set groupId
    req.session.groupId = req.params.id;

    return app.render(req, res, "/group", { id: req.params.id });
  });

  server.get("*", (req: Request, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(
      `> Ready on http://localhost:${port}`
    );
  });
});
