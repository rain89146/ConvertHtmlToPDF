import { Request } from "express";
import RequestHeaderObject from "./objects/RequestHeaderObject";
import url from 'url';

export default class ApiTools {
    //
    static parseQueryParam(address: string): any {
        return url.parse(address, true).query;
    }
    //
    static getRequestHeader(req: Request) : RequestHeaderObject {
        const referer = req.headers.referer;
        const queryparam = (referer) ? this.parseQueryParam(referer) : {};
        const {headers, method, statusCode, statusMessage, rawHeaders, body, query, cookies, url, socket} = req;
        return new RequestHeaderObject({
            userAgent: headers['user-agent'],
            accept: headers.accept,
            host: headers.host,
            acceptEncoding: headers['accept-encoding'],
            cookie: cookies,
            authorization: (headers['cas-vendor-authorization']) ? headers['cas-vendor-authorization'].toString() : '',
            // authorization: headers['cas-vendor-authorization'],
            ip: socket.remoteAddress!,
            url: url,
            method: method,
            statusCode: statusCode,
            statusMessage: statusMessage,
            referer: req.headers.referer,
            refererQuery: queryparam,
            rawHeader: rawHeaders,
            body: JSON.parse(JSON.stringify(body)),
            query,
            domain: ""
        })
    }
}