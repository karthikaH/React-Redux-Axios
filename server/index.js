const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

// middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('api/v1/actionCaughtBySaga', (req, res) => {
  const { body } = req;
  res.status(200).send({
    type: body.type,
    middleware: 'Saga',
    using: 'Hooks',
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
