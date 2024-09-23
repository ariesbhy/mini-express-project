const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  image: { type: String },
  id: { type: Number },
  title: { type: String },
  author: { type: String },
  price: { type: Number },
});

module.exports = model("book", BookSchema);
