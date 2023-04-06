import FileSystemWrapper from "../../FileSystem/FileSystemWrapper";
import NoFilesFoundInImportFolderException from "../exception/NoFilesFoundInImportFolderException";
import ConvertHtmlRepo from "../repo/ConvertHtmlRepo";
import path from 'path';


export default class ConvertHtmlController {
    private _repo: ConvertHtmlRepo;
    private _fileSystem: FileSystemWrapper;

    constructor() {
        this._repo = new ConvertHtmlRepo();
        this._fileSystem = new FileSystemWrapper();
    }

    /**
     * Get all the files from directory
     * @param directory 
     * @returns 
     */
    private async getAllFilesFromDirectory(directory: string): Promise<string[]> {
        return await this._fileSystem.RetrieveFilesFromFolder(directory);
    }

    /**
     * Convert file in the import folder and export it into export folder
     */
    async convertHtmlFiles(): Promise<void> {
        //
        const importFolder = path.join(__dirname, '../../../../htmlfolder');
        const exportFolder = path.join(__dirname, '../../../../pdffolder');

        //
        const files = await this.getAllFilesFromDirectory(importFolder);
        if (files.length === 0) throw new NoFilesFoundInImportFolderException();

        //
        const fileName = this._fileSystem.RetrieveFileName(files[0]);

        //
        const filePath = path.join(importFolder, files[0]);
        const outPath = path.join(exportFolder, `${fileName}.pdf`);
        
        //
        await this._repo.convert(filePath, outPath);
    }
}