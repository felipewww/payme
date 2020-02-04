import HttpResponse from "@Helpers/HttpResponse/HttpResponse";
import {Response} from "express";

export class Responser {
    constructor(private fn: Promise<HttpResponse>, response: Response) {
        fn
            .then((result: HttpResponse) => {
                let jsonResponse: any = {};

                response.status(result.statusCode());

                if (result.statusCode() === 200) {
                    jsonResponse.data = result.getData();
                } else {
                    jsonResponse.error = result.getErrorMessage();
                }

                response.json(jsonResponse);
            })
            .catch(err => {
                response.status(500);
                response.json({message: 'Unexpected error'})
            })
    }
}