import {CardValidator, ICard} from "@Libs/CardValidator";

function mockCard(): ICard {
    return {
        cardNumber: "2365145896523658",
        cvv: 156
    }
}

let underTest = new CardValidator();

describe('ProcessTransaction', () => {
    test('Should send CVV as number with size 3', () => {
        let card: ICard = mockCard();
        card.cvv = 1561
        expect(underTest.validate(card)).toBeFalsy();
    })

    test('Should send correct card number (with 16 chars)', () => {
        let card: ICard = mockCard();
        card.cardNumber = '1561';
        expect(underTest.validate(card)).toBeFalsy();
    })
});