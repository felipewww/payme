import {ITransactionRaw} from "@Repositories/TransactionRepository";
import {PaymentMethod} from "@Data/PaymentMethod/PaymentMethod";
import {PaymentMethodFactory} from "@Data/factories/PaymentMethodFactory";

export class Transaction {
    id: number;
    cardDueDate: string;
    cardNumber: string;
    clientID: number;
    description: string;
    payerName: string;
    paymentMethod: PaymentMethod;
    value: number;

    constructor(transactionRaw: ITransactionRaw) {
        this.id = transactionRaw.id;
        this.cardDueDate = transactionRaw.cardDueDate;
        this.cardNumber = transactionRaw.cardNumber;
        this.clientID = transactionRaw.clientID;
        this.description = transactionRaw.description;
        this.payerName = transactionRaw.payerName;
        this.paymentMethod = PaymentMethodFactory.make(transactionRaw.paymentMethod);
        this.value = transactionRaw.value;
    }
}