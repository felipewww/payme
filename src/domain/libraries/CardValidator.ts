export interface ICard {
    cardNumber: string;
    cvv: number;
}

/**
 * Fake helper for make card validation, just returning TRUE
 */
export class CardValidator {
    public validate(card: ICard): boolean {
        if (card.cvv.toString().length !== 3) {
            return false;
        }

        if (card.cardNumber.length != 16) {
            return false;
        }

        return true;
    }
}