import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

export class Success extends HttpResponse {
    constructor() {
        super(200);
    }
}