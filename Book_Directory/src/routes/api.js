const express = require('express');
const bookModal = require('../model/book-modal');

const Book = bookModal.bookModal;
let Books = bookModal.BookArray;
const api = express.Router();
// get books
api.get('/books', (req, res) => {
  res.send(Books);
});
// add books
api.post('/books', (req, res) => {
  const title = req.body.title;
  const isbn = req.body.isbn;
  const location = req.body.location;
  const author = req.body.author;
  const newBook = new Book(isbn, title, location, author);
  Books.push(newBook);
  res.send('Book Saved')
  console.log(Books);
});
// get by id
api.get('/books/:id', (req, res) => {
  const isbn = req.body.isbn;
  console.log(isbn);
  for (let bookItem of Books) {
    if (bookItem.id === isbn) {
      res.json(bookItem);
      return;
    }
  }
  res.status(404).send('Book not found');
});
// update record
api.put('/books', (req, res) => {
  const isbn = req.body.isbn;
  const title = req.body.title === undefined ? null : req.body.title;
  const location = req.body.location === undefined ? null : req.body.location;
  const author = req.body.author === undefined ? null : req.body.author;
  console.log(isbn);
  for (let bookItem of Books) {
    if (bookItem.id === isbn) {
      if (title != null) {
        bookItem.name = title;
      }
      if (location != null) {
        bookItem.location = location;
      }
      if (author != null) {
        bookItem.author = author;
      }
      res.json(bookItem);
      return;
    }
  }
  res.status(404).send('Book not found');
});
// delete
api.delete('/books', (req, res) => {
  const isbn = req.body.isbn;
  console.log(isbn);
  Books = Books.filter(i => {
    if (i.id !== isbn) {
      return true;
    }
    return false;
});
  res.send('<h1>Book deleted<h1>');
});

module.exports = api;
