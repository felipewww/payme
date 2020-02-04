
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {id: 1, name: 'Sr. Marinho'},
        {id: 2, name: 'Dona Branca'},
        {id: 3, name: 'Sr. Mostarda'},
        {id: 4, name: 'Dona Violeta'}
      ]);
    })
    .catch(reason => {
      console.log('SEED DIDN\'T RUNS- Clients')
    })
};
