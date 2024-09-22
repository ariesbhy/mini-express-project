const express = require("express");
const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} = require("./books.controller");
const booksRouter = express.Router();

booksRouter.get("/api/books", getAllBooks);

//get one book by id
booksRouter.get("/api/book/:id", getOneBook);

// create book
booksRouter.post("/api/book", createBook);

//delete book
booksRouter.delete("/api/book/:id", deleteBook);

//update book
booksRouter.put("/api/book/:id", updateBook);

module.exports = booksRouter;
