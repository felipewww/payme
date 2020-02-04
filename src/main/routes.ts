import {app} from "./core";
import {Request, Response} from "express";
import {TransactionController} from "@Controllers/TransactionController";
import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

app.post('/api/v1/transaction', (request: Request, response: Response) => {
    new TransactionController()
        .handle(request)
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
});