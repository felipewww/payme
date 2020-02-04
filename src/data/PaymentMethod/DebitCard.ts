import {PaymentMethod} from "@Data/PaymentMethod/PaymentMethod";

export class DebitCard extends PaymentMethod {
    protected percentTax = 3;

    constructor() {
        super('debit_card');
    }

    status(): "waiting_funds" | "paid" {
        return "paid";
    }

    paymentDate(): Date {
        return new Date();
    }
}