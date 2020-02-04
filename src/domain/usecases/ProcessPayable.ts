import {Transaction} from "@Data/Transaction";
import {Payable} from "@Data/Payable";
import {PayableRepository} from "@Repositories/PayableRepository";

export class ProcessPayable {
    constructor(private transaction: Transaction) {

    }

    public async process(): Promise<any> {
        let payable = new Payable(this.transaction);
        let repo = new PayableRepository();
        return repo.store(payable)
    }
}