import {Payable} from "@Data/Payable";
import {PayableModel} from "@Models/PayableModel";

export class PayableRepository {
    store(payable: Payable) {
        let data = {
            transaction_id: payable.getTransaction().id,
            payable_status_id: payable.getStatus().id,
            payment_date: payable.getPaymentDate()
        };

        let model = new PayableModel();
        return model.store(data);
    }
}