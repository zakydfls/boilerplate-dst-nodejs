const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const router = require('./src/routes/index.route');
const ErrorMiddleware = require("./src/middlewares/error.middleware");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use(ErrorMiddleware);
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});