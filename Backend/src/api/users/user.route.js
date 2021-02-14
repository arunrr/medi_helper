const express = require('express');

const { getAllUsers, getSpecificUser } = require('./user.queries');

const router = express.Router();

// Get user by username
router.use('/:username', async (req, res) => {
  const [userData] = await getSpecificUser(req.params.username);
  res.status(200);
  res.setHeader('content-type', 'Application/json');
  res.json({ user: userData });
});

// Get all users
router.use('/', async (req, res) => {
  res.status(200);
  res.setHeader('content-type', 'Application/json');
  res.json({ users: await getAllUsers() });
});

module.exports = router;
