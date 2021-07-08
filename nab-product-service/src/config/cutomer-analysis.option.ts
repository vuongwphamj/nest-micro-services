import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const CUSTOMER_ANALYSIS_PACKAGE = Symbol('CUSTOMER_ANALYSIS_PACKAGE');

export const CustomerAnalysisServiceClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: `${process.env.CUSTOMER_SERVICE_HOST}:${process.env.CUSTOMER_SERVICE_PORT}`,
        package: 'customers',
        protoPath: join(__dirname, '../__proto/customers.proto'),
        loader: {
            objects: true,
            arrays: true,
        },
    },
};
