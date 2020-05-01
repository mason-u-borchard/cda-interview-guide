const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;


const imageSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  url: String
}
);

const Images = mongoose.model('Images', imageSchema);
module.exports = Images;