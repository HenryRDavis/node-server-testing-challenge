const youtubeConn = process.env.DATABASE_URL || "postgresql://postgres@localhost/hobbits";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/youtubers.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  // we will use this configuration for Heroku
  production: {
    client: "pg",
    connection: youtubeConn,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
