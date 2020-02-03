import {TransactionModel} from "@Models/TransactionModel";

export interface ITransaction {
    id: number;
    value: number;
    description: string;
    paymentMethod: "debit_card"|"credit_card";
    cardNumber: string;
    payerName: string;
    cardDueDate: string;
    CVV: number;
    clientID: number
}

export class TransactionRepository {
    async store(data: Omit<ITransaction, 'id'>): Promise<Array<number>> {
        let model = new TransactionModel();
        return model.store(data);
    }
}