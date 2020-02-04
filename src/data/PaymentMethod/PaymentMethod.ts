export abstract class PaymentMethod {
    protected percentTax: number;
    protected waitingDays: number = 0;

    protected constructor(private _name: "debit_card"|"credit_card"){

    }

    abstract status(): "waiting_funds"|"paid"

    abstract paymentDate(): Date;

    name() {
        return this._name;
    }

    getPercentTax() {
        return this.percentTax;
    }

    getWaitingDays() {
        return this.waitingDays;
    }
}
