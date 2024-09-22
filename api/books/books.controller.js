const getAllBooks = (req, res) => {
  return res.status(200).json({ data: books });
};

const getOneBook = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => {
    if (book.id == id) return true;
  });
  if (!book) {
    return res.status(404).json({ error: "Book Not Found" });
  } else {
    return res.status(200).json({ data: book });
  }
};

const createBook = (req, res) => {
  let lenght = books.lenght;
  let newId = books[lenght - 1].id + 1;
  const newBook = {
    id: newId,
    bookTitle: req.body.bookTitle,
    author: req.body.author,
    price: req.body.price,
  };
  books.push(newBook);
  res.status(201).json({ message: "Added book", data: books });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const updatedBooks = books.filter((book) => {
    if (book.id != id) {
      return true;
    }
  });
  res.status(200).json({ data: updatedBooks });
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const bookFound = books.find((book) => {
    if (book.id == id) {
      return true;
    }
  });
  bookFound.title = req.body.title;
  return res.json({ data: bookFound });
};
module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
};
