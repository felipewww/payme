import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

export class BadRequest extends HttpResponse {
    constructor(error: Error) {
        super(400);
    }
}