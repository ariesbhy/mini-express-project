const express = require("express");
const booksRouter = require("./api/books/books.routes");
const PORT = 9000;
const app = express();

app.use(express.json());

app.use(booksRouter);

app.listen(PORT, () => {
  console.log(`application is running on ${PORT}`);
});
