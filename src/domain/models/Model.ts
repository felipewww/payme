import knex from 'knex';
import {Filterable} from "@Utils/QueryFilters/Filterable";

export class Model {
    public builder: knex;
    private filters: Array<Filterable>;

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

    public withFilters(filters: Array<Filterable>) {
        this.filters = filters;
    }

    protected exec(query: knex.QueryBuilder) {
        if (this.filters.length) {
            this.filters.forEach((filter: Filterable) => {
                filter.apply(query);
            });
        }

        return query;
    }
}