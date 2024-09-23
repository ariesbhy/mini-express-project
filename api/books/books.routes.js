const express = require("express");
const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} = require("./books.controller");
const upload = require("../../middleware/multer");
const booksRouter = express.Router();

booksRouter.get(
  "/api/books",
  (req, res, next) => {
    console.log("GETTING ALL BOOKS");
    next();
  },
  getAllBooks
);

//get one book by id
booksRouter.get("/api/book/:id", getOneBook);

// create book
booksRouter.post("/api/book", upload.single("image"), createBook);

//delete book
booksRouter.delete("/api/book/:id", deleteBook);

//update book
booksRouter.put("/api/book/:id", updateBook);

module.exports = booksRouter;
