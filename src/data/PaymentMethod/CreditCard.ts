import {PaymentMethod} from "@Data/PaymentMethod/PaymentMethod";

export class CreditCard extends PaymentMethod {
    constructor() {
        super('credit_card');
    }

    status(): "waiting_funds" | "paid" {
        return "waiting_funds";
    }

    paymentDate(): Date {
        return new Date();
    }
}