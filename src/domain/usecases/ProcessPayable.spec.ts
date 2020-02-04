import {Transaction} from "@Data/Transaction";
import {ProcessPayable} from "@UseCases/ProcessPayable";

function makeProcessPayable(transaction: Transaction) {
    return new ProcessPayable(transaction)
}

describe('ProcessPayable', () => {
    test('', () => {

    })
});