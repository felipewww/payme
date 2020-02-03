import {ITransaction, TransactionRepository} from "@Repositories/TransactionRepository";
import {CardValidator, ICard} from "@Libs/CardValidator";

export class ProcessTransaction {
    private card: ICard;
    public transactionData: Omit<ITransaction, 'id'>;

    constructor(transactionData: Omit<ITransaction, 'id'>) {
        this.transactionData = transactionData;
    }

    public async process(): Promise<Array<number>> {
        if ( !this.validateCard() ){
            throw new Error('Invalid card')
        }

        return this.saveTransaction();
    }

    public validateCard(): boolean {
        this.card = {
            cardNumber: this.transactionData.cardNumber,
            cvv: this.transactionData.CVV,
        };

        let cardValidator = new CardValidator(this.card);
        return cardValidator.validate();
    }

    public saveTransaction(): Promise<Array<number>>  {
        this.cutCardNumber();

        let repo = new TransactionRepository();
        return repo.store(this.transactionData);
    }

    public cutCardNumber(): void {
        this.transactionData.cardNumber =  this.transactionData.cardNumber.slice(-4);
    }
}
