import { NestFactory } from '@nestjs/core';
import { ClientOptions } from '@nestjs/microservices';
import { get } from 'lodash';

import * as path from 'path';
import * as dotenv from 'dotenv';

const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
    console.log('Parse env config fail');
}

export class MicroApplication {
    App: any;
    options?: ClientOptions;

    constructor(AppModule, options?: ClientOptions) {
        this.App = AppModule;
        this.options = options;
    }

    start() {
        const bootstrap = async () => {
            const app = await NestFactory.createMicroservice(this.App, this.options);

            app.listen(() => {
                console.log(`Listening on ${get(this, 'options.options.url')}`);
            });
        };
        bootstrap();
    }
}
