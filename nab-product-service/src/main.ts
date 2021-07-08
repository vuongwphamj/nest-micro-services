import { Application } from 'nab-core-service/dist';
import { AppModule } from './app.module';

new Application(AppModule).start();
