interface IApiResponseObjectInterface {
    status: boolean;
    exception?: string;
    message?: string;
    response: any;
}
export default class ApiResponseObject {
    status: boolean;
    exception: string;
    message: string;
    response: any;

    constructor({
        status,
        exception,
        message,
        response
    }: IApiResponseObjectInterface) {
        this.status = status;
        this.exception = exception;
        this.message = message;
        this.response = response;
    }
}