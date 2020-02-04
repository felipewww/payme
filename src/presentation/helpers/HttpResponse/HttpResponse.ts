export default abstract class HttpResponse {
    protected error: Error;

    protected constructor(protected _statusCode: number) {

    }

    statusCode() {
        return this._statusCode;
    }

    getErrorMessage(): string {
        console.log(this.error);
        if (this.error) {
            return this.error.message;
        }

        return null;
    }
}