import {app} from "./core";
import {Request, Response} from "express";
import {TransactionController} from "@Controllers/TransactionController";
import HttpResponse from "@Helpers/HttpResponse/HttpResponse";

app.post('/api/v1/transaction', (request: Request, response: Response) => {
    new TransactionController()
        .handle(request)
        .then((result: HttpResponse) => {
            console.log(result)
            response.status(result.statusCode());
            response.json({data: true})
        })
        .catch(err => {
            response.status(500);
            response.json({message: 'Unexpected error'})
        })
});