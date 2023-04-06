export default class UnableToGeneratePdfException extends Error {
    constructor(reason: string) {
        super();
        this.name = this.constructor.name;
        this.message = `Unable to generate pdf, reason: ${reason}`;
    }
}