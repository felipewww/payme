import {Model} from "@Models/Model";

export class PayableModel extends Model {
    async store(data: any): Promise<Array<number>> {
        return this.builder
            .table('payables')
            .insert(data)
            .returning('id');
    }
}