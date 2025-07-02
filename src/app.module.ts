import { Module } from "@nestjs/common";
import { ServerModule } from "./module/server.module";
@Module({
	imports: [ServerModule],
	providers: [],
})
export class AppModule {}
