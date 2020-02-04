
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payable_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('payable_status').insert([
        {id: 1, name: 'paid'},
        {id: 2, name: 'waiting_funds'},
      ]);
    });
};
