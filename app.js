//import
const express = require("express");
const booksRouter = require("./api/books/books.routes");
const connectDB = require("./database");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware");
const path = require("path");

//configs and init
dotenv.config();
const PORT = process.env.PORT;
const app = express();

connectDB();
console.log(path.join(__dirname, "media"));

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
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

//middleware
app.use(notFoundHandler);

//starting the server
app.listen(PORT, () => {
  console.log(`application is running on ${PORT}`);
});
