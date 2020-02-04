import {CreditCard} from "@Data/PaymentMethod/CreditCard";
import {PaymentMethod} from "@Data/PaymentMethod/PaymentMethod";
import {DebitCard} from "@Data/PaymentMethod/DebitCard";

export class PaymentMethodFactory {
    public static make(method: "credit_card"|"debit_card"): PaymentMethod {
        let instance: PaymentMethod;

        switch (method) {
            case "credit_card":
                instance = new CreditCard();
                break;

            case "debit_card":
                instance = new DebitCard();
                break;

            default:
                throw new Error('Invalid payment method');
        }

        return instance
    }
}