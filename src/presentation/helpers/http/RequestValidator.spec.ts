import {RequestValidator} from "@Helpers/http/RequestValidator";
import {IHttpRequest} from "@Protocols/Http";

let mockRequest: IHttpRequest = {
    body: {
        param1: '1',
        param2: '2',
    }
};

let underTest = new RequestValidator(
    mockRequest,
    ['param1','param2']
);

describe('RequestValidator', () => {
    test('Should return false because param3 and param4 were not sent', () => {
        underTest.setRequiredProperties([
            'param1','param2','param3','param4'
        ]);

        let result: boolean = underTest.validate();
        expect(result).toBe(false);

        let unsentParams = underTest.getUnsentProps();
        expect(unsentParams).toMatchObject(['param3','param4'])
    })
})