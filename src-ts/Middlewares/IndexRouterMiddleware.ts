import { NextFunction, Response, Request } from "express";

export default async function IndexRouterMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
    next()
}