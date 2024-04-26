const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const RouterPath = require('./router');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', RouterPath);
app.use('/api/user', RouterPath);
app.use('/api/country', RouterPath);
app.use('/api/state/:id', RouterPath);
app.use('/api/adduser', RouterPath);

app.listen(port, () => {
   console.log(`Server running on port: ${port}`);
   console.log(`http://localhost:${port}`);
});
