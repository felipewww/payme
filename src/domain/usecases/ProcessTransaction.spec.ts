import {ProcessTransaction} from "@UseCases/ProcessTransaction";
import {ITransaction} from "@Repositories/TransactionRepository";

function mockTransactionData(): Omit<ITransaction, 'id'> {
    return {
        CVV: 163,
        cardDueDate: "10/2030",
        cardNumber: "6352985478412563",
        clientID: 1,
        description: "Some transaction description",
        payerName: "Felipe",
        paymentMethod: "credit_card",
        value: 10.00
    }
}

function makeProcessTransaction(transactionData: Omit<ITransaction, 'id'>) {
    return new ProcessTransaction(transactionData)
}

let underTest = makeProcessTransaction(mockTransactionData());
jest.spyOn(underTest, 'validateCard').mockReturnValue(true);

describe('ProcessTransaction', () => {
    test('Should throws if send an invalid card', async () => {
        jest.spyOn(underTest, 'validateCard').mockReturnValueOnce(false);
        expect.assertions(1);
        try {
            await underTest.process()
        } catch (e) {
            expect(e.message).toBe('Invalid card');
        }
    })

    test('Should cut card number, keep only last 4 numbers', () => {
        underTest.cutCardNumber()
        expect(underTest.transactionData.cardNumber).toBe('2563');
    })
})