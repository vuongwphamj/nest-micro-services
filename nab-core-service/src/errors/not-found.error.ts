import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundRequest extends HttpException {
    constructor(errMessage = 'Not Found') {
        super(
            {
                error: errMessage,
                status: HttpStatus.NOT_FOUND,
            },
            HttpStatus.NOT_FOUND,
        );
    }
}
