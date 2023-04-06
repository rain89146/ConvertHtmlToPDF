export default class NoFilesFoundInImportFolderException extends Error {
    constructor(){
        super();
        this.name = this.constructor.name;
        this.message = `No files were found in the import folder`
    }
}