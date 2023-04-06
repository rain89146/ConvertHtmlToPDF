import FileSystemRepo from "../repo/FileSystemRepo";

export default class FileSystemController extends FileSystemRepo {
    constructor() {
        super();
    }

    GetFileExtension(filePath: string): string {
        return this.getFileExtension(filePath);
    }

    GetFileName(filePath: string): string {
        return this.getFileName(filePath);
    }

    async GetFilesFromFolder(folderPath): Promise<string[]> {
        return await this.readAllFilesInDirectory(folderPath);
    }
}