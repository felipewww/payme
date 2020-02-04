export default abstract class HttpResponse {
    protected error: Error;
    protected data: any;

    protected constructor(protected _statusCode: number) {

    }

    statusCode() {
        return this._statusCode;
    }

    getErrorMessage(): string {
        if (this.error) {
            return this.error.message;
        }

        return null;
    }

    getData(): any {
        return this.data;
    }
}