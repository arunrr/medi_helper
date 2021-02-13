// Seeding initial data to database

const orderedTableNames = require('../../src/constants/orderedTableNames');
const tableNames = require('../../src/constants/tableNames');
const {
  createUserData,
  createMedicineCategoryData,
  createMorningIntakeData,
  createEveningIntakeData,
  createAfternoonIntakeData,
  createNightIntakeData,
  createMedicineData,
} = require('../../src/constants/initialTableData');

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  orderedTableNames.map(async (tableName) => await knex(tableName).del());

  const userData = await createUserData();
  const medCategoryData = createMedicineCategoryData();
  const morningIntakeData = createMorningIntakeData();
  const afternoonIntakeData = createAfternoonIntakeData();
  const eveningIntakeData = createEveningIntakeData();
  const nightIntakeData = createNightIntakeData();
  const medicineData = createMedicineData();

  // Insert user data to user table
  await knex(tableNames.user).insert(userData);
  console.log('User data seeded');

  // Insert Medicine Categroy data to table
  await knex(tableNames.category).insert(medCategoryData);
  console.log('Medicine category seeded');

  // Insert Morning data to table
  await knex(tableNames.morning).insert(morningIntakeData);
  console.log('Morning data seeded');

  // Insert Afternoon data to table
  await knex(tableNames.afternoon).insert(afternoonIntakeData);
  console.log('Afternoon data seeded');

  // Insert Evening data to table
  await knex(tableNames.evening).insert(eveningIntakeData);
  console.log('Evening data seeded');

  // Insert Night data to table
  await knex(tableNames.night).insert(nightIntakeData);
  console.log('Night data seeded');

  // Insert Medicine data to table
  await knex(tableNames.medicine).insert(medicineData);
  console.log('Medicine data seeded');
};
