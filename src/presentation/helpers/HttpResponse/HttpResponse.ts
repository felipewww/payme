export default abstract class HttpResponse {
    protected constructor(protected _statusCode: number) {

    }

    statusCode() {
        return this._statusCode;
    }
}