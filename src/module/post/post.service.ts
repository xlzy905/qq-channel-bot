/*
 * @Author: Xiao Lou
 * @Description: 
 * @FilePath: /qq-channel-bot/src/module/post/cw.service.ts
 */
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
// 创建client
@Injectable()
export class PostService {
    constructor(private readonly prismaService: PrismaService) { }

    async randomPost() {
        try {
            const count = await this.prismaService.post.count()
            const skip = Math.max(0, Math.floor(Math.random() * count) - 1)
            const post = await this.prismaService.post.findFirst({
                skip,
                take: 1
            })
            return post.content
        } catch (error) {
            console.log(error)
            // 异常处理
            return '服务器异常'
        }
    }

} 