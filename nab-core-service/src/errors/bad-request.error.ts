import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequest extends HttpException {
    constructor(errMessage = 'Bad request') {
        super(
            {
                error: errMessage,
                status: HttpStatus.BAD_REQUEST,
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}
