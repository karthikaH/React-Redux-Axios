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

app.post('/api/v1/actionCaughtBySaga/', (req, res) => {
  const {
    body: { params },
  } = req;
  res.status(200).send({
    actionDispatched: params.actionDispatched,
    actionInSaga: params.actionInSaga,
    middleware: 'Saga',
    using: 'Hooks',
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
