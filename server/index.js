const express = require('express');
const axios = require('axios');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
let cors = require('cors');
const app = express();
const PORT = 3000;
const db = require('./database/index.js');
constImages = require('./database/Images.js');




app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.post('/images', (req, res) => {
  Images.create({
    url: req.body.url
  })
  .then((data) => {
    res.send(data);
  })
    .catch(function(err) {
      res.status(404);
      console.log(`Could not add new image to db, err: ${err}`);
      res.send(err);
    });
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app