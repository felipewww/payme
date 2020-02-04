import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

export class Success extends HttpResponse {
    constructor(protected data: any) {
        super(200);
    }
}