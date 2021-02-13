const doHashing = require('../utils/libs/hashing');

const intakeData = [
  {
    code: 'ZERO',
    intake: 0,
  },
  {
    code: 'ONE',
    intake: 1,
  },
  {
    code: 'TWO',
    intake: 2,
  },
  {
    code: 'THREE',
    intake: 3,
  },
];

const createUserData = async () => {
  // Generate random password for user
  const password = Math.random().toString(16);
  console.log(`Password: ${password}`);

  const hashPassword = await doHashing(password);

  // Create user data
  const user = {
    username: 'Mohan_rvm@003',
    password: hashPassword,
    name: 'Mohan',
    email: 'Mohan@gmail.com',
  };

  return user;
};

const createMedicineCategoryData = () => {
  // Medicine Category data
  const categories = [
    {
      code: 'DIA',
      name: 'Diabetic',
    },
    {
      code: 'COL',
      name: 'Cholestrol',
    },
    {
      code: 'BP',
      name: 'Blood Pressure',
    },
    {
      code: 'CLD',
      name: 'Common Cold',
    },
    {
      code: 'ABIO',
      name: 'Anti-Biotic',
    },
  ];

  return categories;
};

const createMorningIntakeData = () => {
  // Create Morning intake data
  const morningIntake = intakeData;

  return morningIntake;
};

const createAfternoonIntakeData = () => {
  // Create Afternoon intake data
  const afternoonIntake = intakeData;

  return afternoonIntake;
};

const createEveningIntakeData = () => {
  // Create Evening intake data
  const eveningIntake = intakeData;

  return eveningIntake;
};

const createNightIntakeData = () => {
  // Create Night intake data
  const nightIntake = intakeData;

  return nightIntake;
};

const createMedicineData = () => {
  // Create Medicine data
  const medicines = [
    {
      name: 'Glyciphage',
      description: 'This medicine decreases the amount a sugar in blood.',
      price_per_qty: 5,
      user_code: 'Mohan_rvm@003',
      medicine_category_code: 'DIA',
      morning_time_code: 'ONE',
      afternoon_time_code: 'ZERO',
      evening_time_code: 'ZERO',
      night_time_code: 'TWO',
    },
    {
      name: 'Nebicard',
      description: 'This medicine decreases the cholestrol.',
      price_per_qty: 20,
      user_code: 'Mohan_rvm@003',
      medicine_category_code: 'COL',
      morning_time_code: 'ONE',
      afternoon_time_code: 'ZERO',
      evening_time_code: 'ZERO',
      night_time_code: 'ONE',
    },
    {
      name: 'Paracetamol',
      description: 'This medicine is used for common cold',
      price_per_qty: 1,
      user_code: 'Mohan_rvm@003',
      medicine_category_code: 'CLD',
      morning_time_code: 'ZERO',
      afternoon_time_code: 'ONE',
      evening_time_code: 'ZERO',
      night_time_code: 'ONE',
    },
    {
      name: 'Carvedilol',
      description: 'This medicine decreases blood pressure.',
      price_per_qty: 15,
      user_code: 'Mohan_rvm@003',
      medicine_category_code: 'BP',
      morning_time_code: 'ONE',
      afternoon_time_code: 'ZERO',
      evening_time_code: 'ZERO',
      night_time_code: 'ONE',
    },
  ];

  return medicines;
};

module.exports = {
  createUserData,
  createMedicineCategoryData,
  createMorningIntakeData,
  createAfternoonIntakeData,
  createEveningIntakeData,
  createNightIntakeData,
  createMedicineData,
};
