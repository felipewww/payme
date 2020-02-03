
exports.up = function(knex) {
  return knex.schema
    .createTable('payable_status', function (table) {
      table.increments('id');
      table.enum('name', ['paid','waiting_funds'])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("payable_status")
};
