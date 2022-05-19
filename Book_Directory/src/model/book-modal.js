class Book {
  constructor(id, name, location, author) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.author = author;
  }
}
let Books = [];
module.exports = {
  bookModal: Book,
  BookArray: Books,
};
