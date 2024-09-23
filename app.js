//import
const express = require("express");
const booksRouter = require("./api/books/books.routes");
const connectDB = require("./database");
const dotenv = require("dotenv");
const morgan = require("morgan");

//configs and init
dotenv.config();
const PORT = process.env.PORT;
const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE");
  next();
});
app.use((req, res, next) => {
  console.log("IM A MIDDLEWARE 2");
  next();
});

//routes
app.use("/api", booksRouter);

//starting the server
app.listen(PORT, () => {
  console.log(`application is running on ${PORT}`);
});
