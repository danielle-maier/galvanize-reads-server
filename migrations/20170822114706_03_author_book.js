exports.up = (knex, Promise) => {
  return knex.schema.createTable('author_book' ,(table) => {
    table.increments();
    table.integer('book_id').references('book.id').unsigned().onDelete('cascade').notNullable();
    table.integer('author_id').references('author.id').unsigned().onDelete('cascade').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('author_book');
};
