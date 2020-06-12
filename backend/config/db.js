const config = require('../knexfile')
const knex = require('knex')(config)
//nao usar isso em producao, por que quando iniciado o index
knex.migrate.latest([config])
module.exports = knex