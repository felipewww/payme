import HttpResponse from "@Helpers/http/HttpResponse";

export class Success extends HttpResponse {
    constructor() {
        super(200);
    }
}