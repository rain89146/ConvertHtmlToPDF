import fs from 'fs';
import path from 'path';
import UnableToReadFileFromDirectoryException from '../exception/UnableToReadFileFromDirectoryException';
export default class FileSystemRepo {

    //
    getFileExtension(filePath: string): string {
        return path.extname(filePath);
    }
    
    //
    getFileName(filePath: string): string {
        return path.parse(filePath).name;
    }

    //
    async readAllFilesInDirectory(filePath: string): Promise<string[]> {
        try {   
            const result = fs.readdirSync(filePath, 'utf8');
            return result.filter(file => file !== '.DS_Store');
        } catch (error) {
            throw new UnableToReadFileFromDirectoryException();
        }
    }
}