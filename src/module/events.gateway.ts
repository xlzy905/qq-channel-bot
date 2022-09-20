/*
 * @Author: Xiao Lou
 * @Description: 消息事件监听
 * @FilePath: /qq-channel-bot/src/module/events.gateway.ts
 */
import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { createOpenAPI } from 'qq-guild-bot'
import { qqBotConfig } from '../config/qqbot.config.js'
import { PostService } from './post/post.service'

const qqBotclient = createOpenAPI(qqBotConfig);
// 注意ws端口号不能和http端口号一样，否则会冲突
@WebSocketGateway(3007)
export class WsStartGateway {
    constructor(private readonly postService: PostService) { }

    // SubscribeMessage里面的字符串接收bindClientConnect方法内监听的事件
    @SubscribeMessage('PUBLIC_GUILD_MESSAGES')
    async publicGuildMessages(@MessageBody() data: any) {
        try {
            const { eventType } = data
            // 机器人被@事件
            if (eventType === 'AT_MESSAGE_CREATE') {
                const { msg: { channel_id, id, author } } = data
                const content = await this.postService.randomPost()
                await qqBotclient.messageApi.postMessage(channel_id, {
                    content: `<@!${author.id}> ${content}`,
                    msg_id: id
                })
                return
            }
            return
        } catch (error) {
            console.log(error)
        }

    }

    // 频道订阅事件
    @SubscribeMessage('GUILDS')
    async guilds(@MessageBody() data: any) {
        try {
            return
        } catch (error) {
            console.log(error)
        }

    }

}