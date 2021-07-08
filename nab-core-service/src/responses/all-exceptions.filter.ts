import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { get } from 'lodash';
import { Response } from './response';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const env = process.env.NODE_ENV;
        if (env !== 'production') {
            this.logger.error('Catch Exception: ', get(exception, 'stack'));
        }

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error!';
        if (exception instanceof HttpException) {
            const response = exception.getResponse();
            message = response['error'];
            status = exception.getStatus();
        } else {
            this.logger.error(`Unexpected error: ${exception.toString()}`);
        }

        response.status(status).json(
            new Response({
                statusCode: status,
                data: null,
                message: message,
            }),
        );
    }
}
