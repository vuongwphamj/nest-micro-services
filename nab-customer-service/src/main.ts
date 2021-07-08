import { MicroApplication } from 'nab-core-service/dist';
import { AppModule } from './app.module';
import { GRPCConfig } from './config';

new MicroApplication(AppModule, GRPCConfig).start();
