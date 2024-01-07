const mongoose = require("mongoose");
const monoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = () => {
  mongoose.connect(monoURI).then(() => {
    console.log("Connected to Mongo Successfully");
  });
};
module.exports = connectToMongo;
