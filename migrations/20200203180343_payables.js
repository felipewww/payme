
exports.up = function(knex) {
  return knex.schema
    .createTable('payables', function (table) {
      table.increments('id');

      table.integer('transaction_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('transactions')
        .onDelete('RESTRICT')
        .notNullable();

      table.integer('payable_status_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('payable_status')
        .onDelete('RESTRICT')
        .notNullable();

      table.dateTime('payment_date').notNullable();

      table.decimal('value');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("payables")
};
