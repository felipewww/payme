
exports.up = function(knex) {
  return knex.schema
    .createTable('transactions', function (table) {
      table.increments('id');
      table.decimal('value').notNullable();
      table.string('description', 255).notNullable();
      table.integer('payment_method').notNullable();
      table.string('payer_name', 255).notNullable();
      table.string('card_number', 4).notNullable();
      table.integer('card_due_date_month').notNullable();
      table.integer('card_due_date_year').notNullable();
      // table.string('card_cvv', 255).notNullable();
      table.integer('client_id').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("transactions")

};
