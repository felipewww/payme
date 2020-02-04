import {TransactionModel} from "@Models/TransactionModel";
import {ITransactionRequest} from "@Protocols/TransactionRequest";

export interface ITransactionRaw {
    id: number;
    value: number;
    description: string;
    paymentMethod: "debit_card"|"credit_card";
    cardNumber: string;
    payerName: string;
    cardDueDateMonth: string;
    cardDueDateYear: string;
    cardDueDate: string;
    clientID: number
}

export class TransactionRepository {
    async store(data: ITransactionRequest): Promise<Array<number>> {
        let model = new TransactionModel();
        const toStore = {
            card_number: data.cardNumber,
            card_due_date_month: 10,
            card_due_date_year: 2021,
            client_id: data.clientID,
            description: data.description,
            payer_name: data.payerName,
            payment_method: data.paymentMethod,
            value: data.value,
        }

        return model.store(toStore);
    }

    async getById(id: number): Promise<Array<ITransactionRaw>> {
        let model = new TransactionModel();
        return model.getById(id);
    }
}