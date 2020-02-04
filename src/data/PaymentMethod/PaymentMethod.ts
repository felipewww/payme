export abstract class PaymentMethod {
    protected constructor(private _name: "debit_card"|"credit_card"){

    }

    abstract status(): "waiting_funds"|"paid"

    abstract paymentDate(): Date;

    name() {
        return this._name;
    }
}
