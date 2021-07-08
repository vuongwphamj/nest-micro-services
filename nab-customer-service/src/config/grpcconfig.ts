import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const GRPCConfig = {
    transport: Transport.GRPC,
    options: {
        url: `${process.env.HOST || '0.0.0.0'}:${process.env.PORT}`,
        package: 'customers',
        protoPath: join(__dirname, '../__proto/customers.proto'),
        loader: {
            objects: true,
            arrays: true,
        },
    },
} as ClientOptions;
