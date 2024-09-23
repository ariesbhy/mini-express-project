const books = require("../../data");
const BookSchema = require("../../models/BookSchema");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await BookSchema.find();
    return res.status(200).json({ data: books });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookFound = await BookSchema.findById(id);
    if (!bookFound) {
      return res.status(404).json({ error: "Book Not Found" });
    } else {
      return res.status(200).json({ data: bookFound });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const bookInfo = req.body;
    console.log(req.file);
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await BookSchema.create(bookInfo);
    return res.status(201).json({ data: newBook });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookSchema.findByIdAndDelete(id);
    console.log(deletedBook);
    return res.status(200).json({ data: deletedBook });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBook = await BookSchema.findByIdAndUpdate(id, req.body);
    if (!updatedBook) {
      return res.status(200).json({ error: "Book Doesn't Exist" });
    }

    return res.status(200).json({ data: updatedBook });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
};
