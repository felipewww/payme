import {ProcessTransaction} from "@UseCases/ProcessTransaction";
import {ITransactionRequest} from "@Protocols/TransactionRequest";

function mockTransactionRequest(): ITransactionRequest {
    return {
        CVV: 163,
        cardDueDate: "10/2030",
        cardNumber: "6352985478412563",
        clientID: 1,
        description: "Some transaction description",
        payerName: "Felipe",
        paymentMethod: 'credit_card',
        value: 10.00
    }
}

function makeProcessTransaction(transactionData: ITransactionRequest) {
    return new ProcessTransaction(transactionData)
}

let underTest = makeProcessTransaction(mockTransactionRequest());
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
        expect(underTest.transactionRequest.cardNumber).toBe('2563');
    })

    test('Should send a valid payment method', async() => {
        let transactionRequest = mockTransactionRequest();
        // @ts-ignore
        transactionRequest.paymentMethod = 'invalid_method';
        let sut = makeProcessTransaction(transactionRequest);

        expect.assertions(1);
        try {
            sut.validateSentPaymentMethod();
        } catch (e) {
            expect(e.message).toBe('Invalid payment method');
        }
    })
})