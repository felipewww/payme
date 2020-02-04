import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

export class BadRequest extends HttpResponse {
    constructor(protected error: Error) {
        super(400);
    }
}