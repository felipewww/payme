export interface ITransactionRequest {
    value: number;
    description: string;
    paymentMethod: "debit_card"|"credit_card";
    cardNumber: string;
    payerName: string;
    cardDueDate: string;
    clientID: number
    CVV: number;
}