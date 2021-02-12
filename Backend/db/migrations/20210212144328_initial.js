const Knex = require("knex");

const { user, category, morning, afternoon, evening, night, medicine } = require("../../src/constants/tableNames");


const addDefaultColumns = (table) => {
  table.timestamps(false,true),
  table.dateTime("deleted_at")
};

const addReferenceColumn = (table, foreignTableName) => {

  table.integer(`${foreignTableName}_id`).unsigned().references("id").inTable(foreignTableName).onDelete("CASCADE");
};

// For knex auto suggestions
/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  
  await knex.schema
  .createTable(user, (table) => { // User table
    table.increments().notNullable();
    table.string("username", 16).notNullable();
    table.string("password", 127).notNullable();
    table.string("name").notNullable();
    table.string("email",254).notNullable().unique();
    table.dateTime("last_login");
    addDefaultColumns(table);

  })
  .createTable(category, (table) => {   // Medicine category table
    table.increments().notNullable();
    table.string("code", 10).notNullable().unique();
    table.string("name").notNullable();
    addDefaultColumns(table);

  })
  .createTable(morning, (table) => { // Morning time table
    table.increments().notNullable();
    table.integer("intake", 5).unsigned().notNullable().unique();
    addDefaultColumns(table);

  })
  .createTable(afternoon, (table) => { // Afternoon time table
    table.increments().notNullable();
    table.integer("intake", 5).unsigned().notNullable().unique();
    addDefaultColumns(table);

  })
  .createTable(evening, (table) => { // Evening time table
    table.increments().notNullable();
    table.integer("intake", 5).unsigned().notNullable().unique();
    addDefaultColumns(table);

  })
  .createTable(night, (table) => { // Night time table
    table.increments().notNullable();
    table.integer("intake", 5).unsigned().notNullable().unique();
    addDefaultColumns(table);

  });

   // Medicine table
  await knex.schema.createTable(medicine, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable();
    table.string("description");
    table.decimal("price_per_qty").notNullable();
    addDefaultColumns(table);
    addReferenceColumn(table,user);
    addReferenceColumn(table,category);
    addReferenceColumn(table,morning);
    addReferenceColumn(table,afternoon);
    addReferenceColumn(table,evening);
    addReferenceColumn(table,night);
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
