import ConvertHtmlController from "./controller/ConvertHtmlController";

export default class ConvertHtmlWrapper {
    private _controller: ConvertHtmlController;

    constructor() {
        this._controller = new ConvertHtmlController();
    }

    async ConvertFiles(): Promise<void> {
        await this._controller.convertHtmlFiles();
    }

}