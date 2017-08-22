const knex = require('./db/knex')

module.exports = {
  getBooks: function() {
    return knex('*').from('book')
  },
  getAuthors: function(){
    return knex('*').from('author')
  },
  getBookById: function(book_id) {
    return knex('book')
      .select('*')
      .where('book.id', book_id)
  },
  addBook: function(body) {
    return knex('book').insert(body).returning('*')
  },
  deleteBook: function(book_id) {
    return knex('book').where('id', book_id).del().returning('*')
  }
}
