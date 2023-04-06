import { Router, Request, Response } from "express";
import IndexHandler from "../Handlers/Handler";

const router = Router();

//  log out
router.post('/', async (req: Request, res: Response) => await IndexHandler(req, res));

//
export default router;