const express = require('express');

const router = express.Router();

const userRouter = require('./users/user.route');

// /users route
router.use('/users', userRouter);

module.exports = router;
