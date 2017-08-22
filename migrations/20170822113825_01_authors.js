exports.up = (knex, Promise) => {
  return knex.schema.createTable('author' ,(table) => {
    table.increments();
    table.text('firstname').notNullable();
    table.text('lastname').notNullable();
    table.text('biography');
    table.text('portrait');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('author');
};
