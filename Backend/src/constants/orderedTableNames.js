const {
  user,
  category,
  medicine,
  morning,
  afternoon,
  evening,
  night,
} = require('./tableNames');

// Table name are in ordered list
module.exports = [medicine, morning, afternoon, evening, night, category, user];
