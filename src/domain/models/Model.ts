import knex from 'knex';

export class Model {
    public builder: knex;

    constructor(){
        this.builder = knex({
            client: 'mysql2',
            connection: {
                host : 'payme-db',
                user : 'root',
                password : 'secret',
                database : 'payme',
                port: 3306
            },
            pool: {
                min: 0,
                max: 1,
            }
        });
    }
}