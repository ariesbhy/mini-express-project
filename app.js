const express = require("express");
const booksRouter = require("./api/books/books.routes");
const connectDB = require("./database");
const PORT = 9000;
const app = express();

app.use(express.json());

connectDB();
app.use("/api", booksRouter);

app.listen(PORT, () => {
  console.log(`application is running on ${PORT}`);
});
