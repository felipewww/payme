import {Transaction} from "@Data/Transaction";
import {IPayableStatus} from "@Repositories/PayableStatusRepository";

export class Payable {
    private payableStatus: IPayableStatus;
    private paymentDate: Date;

    constructor(
        private transaction: Transaction,
        private id?: number,
    ) {
        this.setPayableStatus();
    }

    private setPayableStatus() {
        switch (this.transaction.paymentMethod.name()) {
            case "debit_card":
                this.payableStatus = {
                    id: 1,
                    name: "paid",
                };
                break;

            case "credit_card":
                this.payableStatus = {
                    id: 2,
                    name: "waiting_funds",
                };
                break;

            default:
                throw new Error('Invalid payment status')
        }
    }

    public getStatus(): IPayableStatus {
        return this.payableStatus;
    }

    public getTransaction(): Transaction {
        return this.transaction;
    }

    public getPaymentDate(): Date {
        return this.addDays(this.transaction.createdAt, this.transaction.paymentMethod.getWaitingDays())
    }

    public getValue() {
        let fee = this.transaction.value * (this.transaction.paymentMethod.getPercentTax() / 100);
        return this.transaction.value - fee
    }

    private addDays(date: Date, days: number): Date {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days);
        return copy
    }
}