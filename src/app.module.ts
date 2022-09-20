import { ServerModule } from './module/server.module';
import { Module } from '@nestjs/common'
@Module({
  imports: [
    ServerModule,],
  providers: []
})
export class AppModule { }
