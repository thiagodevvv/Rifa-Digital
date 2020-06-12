
exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
      table.increments('id').primary()
      table.string('name')
      table.float('size')
      table.string('key')
      table.string('url')
      table.integer('imagesID').references('id').inTable('rifas').notNull()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('images')
};
