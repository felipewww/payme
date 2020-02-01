import {IHttpRequest} from "@Protocols/Http";

export class RequestValidator {
    private unsentProps: Array<string> = [];

    constructor(
        private request: IHttpRequest,
        private requiredProps: Array<string> = [],
    ) {
    }

    setRequiredProperties(requiredProps: Array<string>) {
        this.requiredProps = requiredProps;
        return this;
    }

    validate(): any {
        let status = true;
         this.requiredProps.forEach((propName: string) => {
            if (!this.request.body[propName]) {
                status = false;
                this.unsentProps.push(propName);
            }
        });

        return status;
    }

    getUnsentProps() {
        return this.unsentProps;
    }
}