const dbConnection = require('../../../db/dbConnection');
const tableNames = require('../../constants/tableNames');

const userColumns = ['username', 'name', 'email'];

// Get users list from DB
const getAllUsers = async () => {
  return await dbConnection.table(tableNames.user).select(userColumns);
};

// Get a specific user
const getSpecificUser = async (username) => {
  return await dbConnection
    .table(tableNames.user)
    .where('username', username)
    .select(userColumns);
};

module.exports = { getAllUsers, getSpecificUser };
