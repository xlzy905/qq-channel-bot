import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WsStartGateway } from "./events.gateway";
import { PostService } from "./post/post.service";

@Module({
	imports: [],
	providers: [PostService, PrismaService, WsStartGateway],
})
export class ServerModule {}
