import {Model} from "@Models/Model";
import {ITransaction} from "@Repositories/TransactionRepository";

export class TransactionModel extends Model {
    async store(data: Omit<ITransaction, 'id'>): Promise<Array<number>> {
        return this.builder
            .table('transactions')
            .insert({
                card_number: data.cardNumber,
                card_due_date_month: 10,
                card_due_date_year: 2021,
                client_id: data.clientID,
                description: data.description,
                payer_name: data.payerName,
                payment_method: data.paymentMethod,
                value: data.value,
            })
            .returning('id')
    }
}
