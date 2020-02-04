import {PaymentMethod} from "@Data/PaymentMethod/PaymentMethod";

export class CreditCard extends PaymentMethod {
    protected percentTax = 5;
    protected waitingDays = 30;

    constructor() {
        super('credit_card');
    }

    status(): "waiting_funds" | "paid" {
        return "waiting_funds";
    }
}