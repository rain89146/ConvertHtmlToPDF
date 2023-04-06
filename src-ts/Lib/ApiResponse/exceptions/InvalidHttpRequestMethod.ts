export default class InvalidHttpRequestMethod extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid HTTP request method"
    }
}