import FileSystemController from "./controller/FileSystemController";

export default class FileSystemWrapper extends FileSystemController {
    constructor() {
        super();
    }

    /**
     * Get file extension
     * @param filePath 
     * @returns 
     */
    RetrieveFileExtension(filePath: string): string {
        return this.GetFileExtension(filePath);
    }

    /**
     * Get file name
     * @param filePath 
     * @returns 
     */
    RetrieveFileName(filePath: string): string {
        return this.GetFileName(filePath);
    }

    /**
     * Get files from folder
     * @param folderPath 
     * @returns 
     */
    async RetrieveFilesFromFolder(folderPath: string): Promise<string[]> {
        return await this.GetFilesFromFolder(folderPath);
    }
}