export class InvalidRequestError extends Error {
    constructor() {
        super('Missing params');
    }
}