import { Request, Response } from "express";
import ApiResponseObject from "../Lib/ApiResponse/objects/ApiResponseObject";
import ApiTools from "../Lib/ApiResponse/ApiTool";
import InvalidHttpRequestMethod from "../Lib/ApiResponse/exceptions/InvalidHttpRequestMethod";
import ConvertHtmlWrapper from "../Lib/ConvertHtml/ConvertHtmlWrapper";

export default async function IndexHandler(req: Request, res: Response): Promise<void> {
    try {
        //
        const _HEADER = ApiTools.getRequestHeader(req);
        //
        if (_HEADER.method !== 'POST') throw new InvalidHttpRequestMethod();
        //
        const fileSystem = new ConvertHtmlWrapper();
        //
        await fileSystem.ConvertFiles();
        //
        res.status(200).json(new ApiResponseObject({
            status: true,
            exception: null,
            message: null,
            response: null
        }))

    } catch (error) {
        res.status(200).json(new ApiResponseObject({
            status: false,
            exception: error.name,
            message: error.message,
            response: null
        }))
    }
}