const Knex = require('knex'); // eslint-disable-line

const {
  user,
  category,
  morning,
  afternoon,
  evening,
  night,
  medicine,
} = require('../../src/constants/tableNames');

const addDefaultColumns = (table) => {
  table.timestamps(false, true), table.dateTime('deleted_at');
};

const addReferenceColumns = (
  table,
  foreignTableName,
  foreignColumn,
  size = 10
) => {
  table
    .string(`${foreignTableName}_code`, size)
    .references(foreignColumn)
    .inTable(foreignTableName)
    .onDelete('CASCADE');
};

const addIntakeColumns = (table) => {
  table.string('code', 5).notNullable().unique();
  table.integer('intake', 5).unsigned().notNullable().unique();
};

// For knex auto suggestions
/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  await knex.schema
    .createTable(user, (table) => {
      // User table
      table.increments().notNullable();
      table.string('username', 16).notNullable().unique();
      table.string('password', 127).notNullable();
      table.string('name').notNullable();
      table.string('email', 254).notNullable().unique();
      table.dateTime('last_login');
      addDefaultColumns(table);
    })
    .createTable(category, (table) => {
      // Medicine category table
      table.increments().notNullable();
      table.string('code', 10).notNullable().unique();
      table.string('name').notNullable();
      addDefaultColumns(table);
    })
    .createTable(morning, (table) => {
      // Morning time table
      table.increments().notNullable();
      addIntakeColumns(table);
      addDefaultColumns(table);
    })
    .createTable(afternoon, (table) => {
      // Afternoon time table
      table.increments().notNullable();
      addIntakeColumns(table);
      addDefaultColumns(table);
    })
    .createTable(evening, (table) => {
      // Evening time table
      table.increments().notNullable();
      addIntakeColumns(table);
      addDefaultColumns(table);
    })
    .createTable(night, (table) => {
      // Night time table
      table.increments().notNullable();
      addIntakeColumns(table);
      addDefaultColumns(table);
    });

  // Medicine table
  await knex.schema.createTable(medicine, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.decimal('price_per_qty').notNullable();
    addDefaultColumns(table);
    addReferenceColumns(table, user, 'username', 16);
    addReferenceColumns(table, category, 'code');
    addReferenceColumns(table, morning, 'code');
    addReferenceColumns(table, afternoon, 'code');
    addReferenceColumns(table, evening, 'code');
    addReferenceColumns(table, night, 'code');
  });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTable(medicine)
    .dropTable(user)
    .dropTable(category)
    .dropTable(morning)
    .dropTable(afternoon)
    .dropTable(evening)
    .dropTable(night);
};
