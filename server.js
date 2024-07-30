// server/server.ts
import express from "express";
import * as Path2 from "node:path";

// server/routes/fruits.ts
import { Router } from "express";

// server/auth0.ts
import { expressjwt as jwt } from "express-jwt";
import jwks from "jwks-rsa";
var domain = "https://";
var audience = "https://";
var checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`
  }),
  audience,
  issuer: `${domain}/`,
  algorithms: ["RS256"]
});
var auth0_default = checkJwt;

// server/routes/fruits.ts
import { StatusCodes } from "http-status-codes";

// server/db/connection.ts
import knex from "knex";

// server/db/knexfile.js
import * as Path from "node:path";
import * as URL from "node:url";
var __filename = URL.fileURLToPath(import.meta.url);
var __dirname = Path.dirname(__filename);
var knexfile_default = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, "dev.sqlite3")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "/app/storage/prod.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  }
};

// server/db/connection.ts
var env = process.env.NODE_ENV || "development";
var connection = knex(knexfile_default[env]);
var connection_default = connection;

// server/db/fruits.ts
async function getAllFruits() {
  const fruit = await connection_default("fruit").select();
  return fruit;
}
async function getFruitById(id) {
  const fruit = await connection_default("fruit").select().first().where({ id });
  return fruit;
}
async function addFruit(data) {
  const [id] = await connection_default("fruit").insert(data);
  return id;
}

// server/routes/fruits.ts
var router = Router();
router.get("/", async (req, res) => {
  try {
    const fruits = await getAllFruits();
    res.json({ fruits: fruits.map((fruit) => fruit.name) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const fruit = await getFruitById(req.params.id);
    res.json(fruit);
  } catch (err) {
    next(err);
  }
});
router.post("/", auth0_default, async (req, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
    return;
  }
  try {
    const { owner, name } = req.body;
    const id = await addFruit({ owner, name });
    res.setHeader("Location", `${req.baseUrl}/${id}`).sendStatus(StatusCodes.CREATED);
  } catch (err) {
    next(err);
  }
});
var fruits_default = router;

// server/server.ts
var server = express();
server.use(express.json());
server.use("/api/v1/fruits", fruits_default);
if (process.env.NODE_ENV === "production") {
  server.use(express.static(Path2.resolve("public")));
  server.use("/assets", express.static(Path2.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path2.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var PORT = process.env.PORT || 3e3;
server_default.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
