import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { TransformInterceptor } from 'src/responses/transform.interceptor';
import { AllExceptionsFilter } from 'src/responses/all-exceptions.filter';

import * as path from 'path';
import * as dotenv from 'dotenv';

const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
    console.log('Parse env config fail');
}

export class Application {
    App: any;

    constructor(AppModule) {
        this.App = AppModule;
    }

    start() {
        const bootstrap = async () => {
            const app = await NestFactory.create(this.App);
            app.useGlobalPipes(
                new ValidationPipe({
                    transform: true,
                    disableErrorMessages: false,
                    whitelist: true,
                }),
            );

            app.useGlobalFilters(new AllExceptionsFilter());
            app.useGlobalInterceptors(new TransformInterceptor());
            const port = process.env.PORT;
            await app.listen(port, () => {
                console.log(`Listening on port ${port}`);
            });
        };
        bootstrap();
    }
}
