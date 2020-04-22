const mongoose = require("mongoose");
const URI = "mongodb://localhost/academia";

mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
