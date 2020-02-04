import {PaymentMethodFactory} from "@Data/factories/PaymentMethodFactory";

describe('PaymentMethodFactory', () => {
    test('Should throws if send invalid type', () => {
        // @ts-ignore
        expect(() => PaymentMethodFactory.make('invalid_type')).toThrow()
    })
})