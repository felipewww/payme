import {Model} from "@Models/Model";
import {ITransactionRaw} from "@Repositories/TransactionRepository";

export class PayableModel extends Model {
    async store(data: any): Promise<Array<number>> {
        return this.builder
            .table('payables')
            .insert(data)
            .returning('id');
    }

    async get(): Promise<Array<any>> {
        let query = this.builder
            .table('payables AS P')
            .select({
                id: 'P.id',
                transactionId: 'P.transaction_id',
                payable_status_id: 'P.payable_status_id',
                payment_date: 'P.payment_date',
                value: 'P.value',
            })
            .innerJoin('transactions AS T', 'P.transaction_id', 'T.id')

        return this.exec(query);
    }
}