import {IHttpRequest} from "@Protocols/Http";
import HttpResponse from "@Helpers/http/HttpResponse";
import {BadRequest} from "@Helpers/http/BadRequest";
import {Success} from "@Helpers/http/Success";
import {RequestValidator} from "@Helpers/http/RequestValidator";

export class TransactionController {
    handle(request: IHttpRequest): HttpResponse {
        let response: HttpResponse = new Success();

        if ( !this.validateRequest(request) ) {
            return new BadRequest();
        }

        return response;
    }

    validateRequest(request: IHttpRequest): boolean {
        const required = [
            'value',
            'description',
            'paymentMethod',
            'cardNumber',
            'payerName',
            'cardDueDate',
            'CVV',
        ];

        let validator = new RequestValidator(request, required);

        return validator.validate();
    }
}