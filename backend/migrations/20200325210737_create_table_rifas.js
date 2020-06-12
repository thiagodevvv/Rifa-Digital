
exports.up = function(knex) {
  return knex.schema.createTable('rifas', table => {
      table.increments('id').primary()
      table.string('description').notNull()
      table.string('premio').notNull()
      table.datetime('datasorteio').notNull()
      table.float('valor').notNull()
      table.float('maxNumeros')
      table.integer('userID').references('id').inTable('users').notNull()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('rifas')
  
};
