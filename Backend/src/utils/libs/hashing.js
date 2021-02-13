// Create a bcrypt hashing function

const bcrypt = require("bcryptjs");

const doHashing = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;

};

module.exports = doHashing;