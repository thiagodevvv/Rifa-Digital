exports.up = function(knex) {
    return knex.schema.createTable('numeros_rifa', table => {
        table.increments('id').primary()
        table.string('numero_rifa').notNull()
        table.string('rifa_id').notNull()
        table.string('user').notNull()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('numeros_rifa')
  };
  