import type { Knex } from "knex";
require ('custom-env').env('staging')

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
  },
};

module.exports = config;
