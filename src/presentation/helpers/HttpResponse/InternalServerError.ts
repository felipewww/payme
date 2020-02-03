import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

export class InternalServerError extends HttpResponse {
    constructor(error: Error) {
        super(500);
    }
}