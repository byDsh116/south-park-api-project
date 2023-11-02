require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const index = require('./routes/index');

const app = express();
const PORT = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
