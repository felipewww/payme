import {app} from "./core";
import {Request, Response} from "express";
import {TransactionController} from "@Controllers/TransactionController";
import {WaitingFundsController} from "@Controllers/WaitingFundsController";
import {PaidController} from "@Controllers/PaidController";
import {Responser} from "./responser";

app.post('/api/v1/transaction', (request: Request, response: Response) => {
    new Responser(new TransactionController().handle(request), response)
});

app.get('/api/v1/waiting-funds/:userId', (request: Request, response: Response) => {
    new Responser(new WaitingFundsController().handle(request), response);
});

app.get('/api/v1/paid/:userId', (request: Request, response: Response) => {
    new Responser(new PaidController().handle(request), response)
});