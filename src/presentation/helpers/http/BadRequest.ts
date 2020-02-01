import HttpResponse from "@Helpers/http/HttpResponse";

export class BadRequest extends HttpResponse {
    constructor() {
        super(400);
    }
}