export default class UnableToReadFileFromDirectoryException extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Unable to read files from directory"
    }
}