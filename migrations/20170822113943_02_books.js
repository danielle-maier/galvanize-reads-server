exports.up = (knex, Promise) => {
  return knex.schema.createTable('book' ,(table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('genre');
    table.text('description');
    table.text('cover');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('book');
};
