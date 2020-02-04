import {Filterable} from "@Utils/QueryFilters/Filterable";
import {QueryBuilder} from "knex";

export class FilterWhere extends Filterable {
    apply(query: QueryBuilder) {
        if (typeof this.values === 'object') {
            query.whereIn(this.key, this.values);
        } else {
            query.where(this.key, this.values);
        }
    }
}