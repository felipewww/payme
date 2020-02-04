import {Transaction} from "@Data/Transaction";
import {Payable} from "@Data/Payable";
import {IPayableStatus} from "@Repositories/PayableStatusRepository";
import {TransactionMock} from "@Mocks/Transaction";

function makePayable(transaction: Transaction) {
    return new Payable(transaction);
}

describe('Payable', () => {
    test('Should make payable status correctly', () => {
        let transactionDebit = TransactionMock('debit_card');
        let payableDebit = makePayable(transactionDebit);

        expect.assertions(2);

        let expectPaid: IPayableStatus = {
            name: "paid",
            id: 1
        };

        expect(payableDebit.getStatus()).toMatchObject(expectPaid);

        let transactionCredit = TransactionMock('credit_card');
        let payableCredit = makePayable(transactionCredit);

        let expectWaitingFunds: IPayableStatus = {
            name: "waiting_funds",
            id: 2
        };

        expect(payableCredit.getStatus()).toMatchObject(expectWaitingFunds);
    })
})