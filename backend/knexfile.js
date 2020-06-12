// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'rifa',
      user:     'postgres',
      password: 'chaveiro12'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
