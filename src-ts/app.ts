import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import Compression from 'compression';
import IndexRouter from './Routers/IndexRouter';
import ApiResponseObject from './Lib/ApiResponse/objects/ApiResponseObject';

//  initialize dotenv file
dotenv.config();

//  server configuration
const port = 1024;
const APIPATH = `api`;

//
const app = express();
app.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(Compression())
.use(`/${APIPATH}`, IndexRouter)
.get(`/${APIPATH}`, (req: Request, res: Response) => {
    res.status(200).json(
        new ApiResponseObject({
            status: true, 
            exception: null, 
            message: null, 
            response: null
        })
    )
})
.listen(port, () => {
    console.log(`PORT=${port};\nENV=${process.env.NODE_ENV}`)
})
.on('error', err => {
    const error = new Error();
    error.name = err.name;
    error.message = err.message;
    console.log(error);
});