const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const apiRouter = require('./api');

// Middlewares
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API routes
app.use('/api', apiRouter);

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to medi_helper backend',
    apis: {
      getUserList: '/api/users',
      getSpecificUser: '/api/users/:username',
    },
  });
});

module.exports = app;
