import { HttpStatus } from '@nestjs/common';

export class Response<T> {
    statusCode: number;
    data: T;
    message: string;

    constructor(data?: Partial<Response<T>>) {
        Object.assign(this, data);
    }

    static ok<D>(data: D) {
        return new Response({
            statusCode: HttpStatus.OK,
            data,
        });
    }

    static error(messge = 'Internal Server Error') {
        return new Response({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: messge,
        });
    }
}
