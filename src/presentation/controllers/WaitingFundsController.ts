import HttpResponse from "@Helpers/HttpResponse/HttpResponse";
import {IHttpRequest} from "@Protocols/Http";
import {PayableRepository} from "@Repositories/PayableRepository";
import {FilterWhere} from "@Utils/QueryFilters/FilterWhere";
import {Success} from "@Helpers/HttpResponse/Success";
import {BadRequest} from "@Helpers/HttpResponse/BadRequest";

export class WaitingFundsController {
    async handle(httpRequest: IHttpRequest): Promise<HttpResponse> {
        let repo = new PayableRepository();

        try {
            const payables = await repo.get([
                new FilterWhere('P.payable_status_id', 2),
                new FilterWhere('T.client_id', httpRequest.params.userId)
            ]);
            return new Success({ payables });
        } catch (reason) {
            return new BadRequest(reason)

        }
    }
}