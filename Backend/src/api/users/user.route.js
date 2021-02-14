const express = require('express');

const { getAllUsers, getSpecificUser } = require('./user.queries');

const router = express.Router();

// Get all users
router.use('/', async (req, res) => {
  res.json({ users: await getAllUsers() });
});

// Get user by username
router.use('/:username', async (req, res) => {
  console.log(req);
  res.json({ users: await getSpecificUser(req.params['username']), req: req });
});

module.exports = router;
