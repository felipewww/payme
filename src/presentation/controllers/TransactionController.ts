import {IHttpRequest} from "@Protocols/Http";
import HttpResponse from "@Helpers/HttpResponse/HttpResponse";
import {BadRequest} from "@Helpers/HttpResponse/BadRequest";
import {Success} from "@Helpers/HttpResponse/Success";
import {RequestValidator} from "@Helpers/RequestValidator/RequestValidator";
import {ProcessTransaction} from "@UseCases/ProcessTransaction";
import {InvalidRequestError} from "@Helpers/Errors/InvalidRequestError";
import {ITransactionRequest} from "@Protocols/TransactionRequest";
import {Transaction} from "@Data/Transaction";
import {ProcessPayable} from "@UseCases/ProcessPayable";

export class TransactionController {

    async handle(request: IHttpRequest): Promise<HttpResponse> {
        if ( !this.validateRequest(request) ) {
            return new BadRequest( new InvalidRequestError() );
        }

        let transaction: Transaction;
        try{
            transaction = await this.processTransaction(request);
            await this.processPayable(transaction);
        } catch (e) {
            return new BadRequest( e );
        }

        return new Success({ transaction });
    }

    private validateRequest(request: IHttpRequest): boolean {
        const required = [
            'value',
            'description',
            'paymentMethod',
            'cardNumber',
            'payerName',
            'cardDueDate',
            'CVV',
            'clientID'
        ];

        let validator = new RequestValidator(request, required);

        return validator.validate();
    }

    public async processTransaction(request: IHttpRequest): Promise<Transaction> {
        const transactionData: ITransactionRequest = {
            CVV: request.body.CVV,
            cardDueDate: request.body.cardDueDate,
            cardNumber: request.body.cardNumber,
            clientID: request.body.clientID,
            description: request.body.description,
            payerName: request.body.payerName,
            paymentMethod: request.body.paymentMethod,
            value: request.body.value,
        };

        let processTransaction = new ProcessTransaction(transactionData);
        return processTransaction.process();
    }

    public async processPayable(transaction: Transaction) {
        let processPayable = new ProcessPayable(transaction);
        return await processPayable.process();
    }
}