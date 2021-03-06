import {Payable} from "@Data/Payable";
import {PayableModel} from "@Models/PayableModel";
import {Filterable} from "@Utils/QueryFilters/Filterable";

export class PayableRepository {

    async get(filters?: Array<Filterable>) {
        let model = new PayableModel();

        if (filters) {
            model.withFilters(filters);
        }

        return model.get();
    }

    store(payable: Payable) {
        let data = {
            transaction_id: payable.getTransaction().id,
            payable_status_id: payable.getStatus().id,
            payment_date: payable.getPaymentDate(),
            value: payable.getValue()
        };

        let model = new PayableModel();
        return model.store(data);
    }
}