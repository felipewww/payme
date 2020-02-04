import {Model} from "@Models/Model";
import {ITransactionRaw} from "@Repositories/TransactionRepository";

export class TransactionModel extends Model {
    async store(data: any): Promise<Array<number>> {
        return this.builder
            .table('transactions')
            .insert(data)
            .returning('id')
    }

    async getById(id: number): Promise<Array<ITransactionRaw>> {
        return this.builder
            .table('transactions')
            .select({
                id: 'id',
                cardNumber: 'card_number',
                cardDueDate: this.builder.raw('CONCAT(card_due_date_month,"/",card_due_date_year)'),
                cardDueDateMonth: 'card_due_date_month',
                cardDueDateYear: 'card_due_date_year',
                clientID: 'client_id',
                description: 'description',
                payerName: 'payer_name',
                paymentMethod: 'payment_method',
                value: 'value',
            })
            .where('id', id)
    }
}
