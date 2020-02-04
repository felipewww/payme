import {TransactionController} from "@Controllers/TransactionController";
import {IHttpRequest} from "@Protocols/Http";
import {CreditCard} from "@Data/PaymentMethod/CreditCard";
import {TransactionMock} from "@Mocks/Transaction";

const underTest = new TransactionController();
jest.spyOn(underTest, 'processTransaction').mockResolvedValue(TransactionMock('credit_card'))
jest.spyOn(underTest, 'processPayable').mockResolvedValue(true)

function mockHttpRequest(propNameToDelete?: string): IHttpRequest {
    let mockRequest: IHttpRequest = {
        body: {
            value: 100.00,
            description: 'TBrand XYZ',
            paymentMethod: 'debit_card',
            cardNumber: '9652378452364589',
            payerName: 'Jane Doe',
            cardDueDate: '01/2020',
            CVV: 562,
            clientID: 1,
        }
    };

    if (propNameToDelete) {
        delete mockRequest.body[propNameToDelete];
    }

    return mockRequest;
}


describe('TransactionController', () => {
    test('Should return 200 if sent correct body', async () => {
        let cloneMock = mockHttpRequest();
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(200);
    });

    test('Should return 400 if have no transaction value', async () => {
        let cloneMock = mockHttpRequest('value');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no description', async () => {
        let cloneMock = mockHttpRequest('description');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no payment method', async () => {
        let cloneMock = mockHttpRequest('paymentMethod');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no card number', async () => {
        let cloneMock = mockHttpRequest('cardNumber');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no payer name', async () => {
        let cloneMock = mockHttpRequest('payerName');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no card due date', async () => {
        let cloneMock = mockHttpRequest('cardDueDate');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no CVV', async () => {
        let cloneMock = mockHttpRequest('CVV');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no clientID', async () => {
        let cloneMock = mockHttpRequest('clientID');
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if something goes bad with doTransaction', async () => {
        jest.spyOn(underTest, 'processTransaction').mockRejectedValue(false)
        let cloneMock = mockHttpRequest();
        const response = await underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });
});
