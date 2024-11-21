const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

//router for service 
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

