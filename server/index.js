const express = require('express');
var cors = require('cors');
const app = express();
const helmet = require('helmet');
const axios = require('axios').default;

// allow cross origin for development;
app.use(cors());

const port = process.env.PORT || 3000;

const apiBase = 'https://bpdts-test-app.herokuapp.com';
app.use(helmet());

app.get('/users', (req, res) => {
  console.log('get users');
  axios
    .get(`${apiBase}/users`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send({ error });
    });
});

app.get('/city/:city/users', (req, res) => {
  axios
    .get(`${apiBase}/city/${req.params.city}/users`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => {
      console.log('error', error);
      res.send('An error occoured. That request was not supported.');
    });
});

app.use(express.static('./build'));

/* catch all */
app.get('*', (req, res) => {
  res.status(404).send('Not sure what you are looking for?');
});

app.listen(port, () => console.log(`App listening on ${port}`));
