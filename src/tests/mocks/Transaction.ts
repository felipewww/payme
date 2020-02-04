import {Transaction} from "@Data/Transaction";

export function TransactionMock(paymentMethod: "debit_card"|"credit_card"): Transaction {
    return new Transaction({
        cardDueDate: "10/2021",
        cardDueDateMonth: "10",
        cardDueDateYear: "2021",
        cardNumber: "2365145298567854",
        clientID: 1,
        description: "Mock desc",
        id: 1,
        payerName: "Fake payer",
        paymentMethod,
        value: 100.00,
        createdAt: '02-04-2020 10:55:00'
    })
}