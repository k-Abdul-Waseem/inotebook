const mongoose = require("mongoose");
const monoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = () => {
  mongoose.connect(monoURI);
};
module.exports = connectToMongo;
