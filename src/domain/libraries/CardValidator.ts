export interface ICard {
    cardNumber: string;
    cvv: number;
}

/**
 * Fake helper for make card validation, just returning TRUE
 */
export class CardValidator {
    constructor(private card: ICard) {
        if (this.card.cvv.toString().length !== 3) {
            throw new Error('Invalid CVV')
        }

        if (this.card.cardNumber.length != 16) {
            throw new Error('Invalid card number size')
        }
    }

    public validate(): boolean {
        return true;
    }
}