import {IHttpRequest} from "@Protocols/Http";
import HttpResponse from "@Helpers/HttpResponse/HttpResponse";
import {BadRequest} from "@Helpers/HttpResponse/BadRequest";
import {Success} from "@Helpers/HttpResponse/Success";
import {RequestValidator} from "@Helpers/RequestValidator/RequestValidator";
import {ProcessTransaction} from "@UseCases/ProcessTransaction";
import {InvalidRequestError} from "@Helpers/Errors/InvalidRequestError";
import {ITransaction} from "@Repositories/TransactionRepository";
import {InternalServerError} from "@Helpers/HttpResponse/InternalServerError";

export class TransactionController {

    async handle(request: IHttpRequest): Promise<HttpResponse> {
        if ( !this.validateRequest(request) ) {
            return new BadRequest( new InvalidRequestError() );
        }

        let transactionId: number;

        try{
            const res = await this.doTransaction(request);
            transactionId = res[0];
        } catch (e) {
            return new InternalServerError(e);
        }

        return new Success();
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

    public async doTransaction(request: IHttpRequest): Promise<Array<number>> {
        const transactionData: Omit<ITransaction, 'id'> = {
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
}