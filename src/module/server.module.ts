/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PostService } from './post/post.service'
import { PrismaService } from '../prisma/prisma.service'
import { WsStartGateway } from './events.gateway'

@Module({
    imports: [],
    providers: [PostService, PrismaService, WsStartGateway]
})
export class ServerModule { }
