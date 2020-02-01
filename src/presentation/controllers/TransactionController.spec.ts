import {TransactionController} from "@Controllers/TransactionController";
import {IHttpRequest} from "@Protocols/Http";

const underTest = new TransactionController();

function getMock(propNameToDelete?: string): any {
    let mockRequest: IHttpRequest = {
        body: {
            value: 100.00,
            description: 'TBrand XYZ',
            paymentMethod: 'debit_card',
            cardNumber: 9652378452364589,
            payerName: 'Jane Doe',
            cardDueDate: '01/2020',
            CVV: 562,
        }
    };

    if (propNameToDelete) {
        delete mockRequest.body[propNameToDelete];
    }

    return mockRequest;
}

describe('TransactionController', () => {
    test('Should return 200 if sent correct body', () => {
        let cloneMock = getMock();
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(200);
    });

    test('Should return 400 if have no transaction value', () => {
        let cloneMock = getMock('value');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no description', () => {
        let cloneMock = getMock('description');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no payment method', () => {
        let cloneMock = getMock('paymentMethod');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no card number', () => {
        let cloneMock = getMock('cardNumber');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no payer name', () => {
        let cloneMock = getMock('payerName');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no card due date', () => {
        let cloneMock = getMock('cardDueDate');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });

    test('Should return 400 if have no CVV', () => {
        let cloneMock = getMock('CVV');
        const response = underTest.handle(cloneMock)
        expect(response.statusCode()).toBe(400);
    });
});
