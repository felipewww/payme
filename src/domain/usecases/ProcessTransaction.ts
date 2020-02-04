import {TransactionRepository} from "@Repositories/TransactionRepository";
import {CardValidator, ICard} from "@Libs/CardValidator";
import {Transaction} from "@Data/Transaction";
import {ITransactionRequest} from "@Protocols/TransactionRequest";
import {PaymentMethodFactory} from "@Data/factories/PaymentMethodFactory";

export class ProcessTransaction {
    private card: ICard;
    public transactionRequest: ITransactionRequest;

    constructor(transactionRequest: ITransactionRequest) {
        this.transactionRequest = transactionRequest;
    }

    public async process(): Promise<Transaction>  {
        if ( !this.validateCard() ){
            throw new Error('Invalid card')
        }

        this.validateSentPaymentMethod();
        // ...call  payment gateway here

        return await this.saveTransaction();
    }

    public validateCard(): boolean {
        this.card = {
            cardNumber: this.transactionRequest.cardNumber,
            cvv: this.transactionRequest.CVV,
        };

        let cardValidator = new CardValidator();
        return cardValidator.validate(this.card);
    }

    public validateSentPaymentMethod() {
        PaymentMethodFactory.make(this.transactionRequest.paymentMethod);
    }

    public async saveTransaction(): Promise<Transaction> {
        this.cutCardNumber();

        let repo = new TransactionRepository();
        const transactionID = await repo.store(this.transactionRequest)
        let transaction = await repo.getById(transactionID[0]);

        return new Transaction(transaction[0]);
    }

    public cutCardNumber(): void {
        this.transactionRequest.cardNumber =  this.transactionRequest.cardNumber.slice(-4);
    }
}
