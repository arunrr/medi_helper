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
    .select(userColumns)
    .where('username' === username);
};

module.exports = { getAllUsers, getSpecificUser };
