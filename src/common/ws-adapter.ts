/*
 * @Author: Xiao Lou
 * @Description: 
 * @FilePath: /qq-channel-bot/src/common/ws-adapter.ts
 */
import * as WebSocket from 'ws';
import { WebSocketAdapter, INestApplicationContext } from '@nestjs/common';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { createWebsocket } from 'qq-guild-bot'
import { qqBotConfig } from '../config/qqbot.config.js'

export class WsAdapter implements WebSocketAdapter {
    constructor(private readonly app: INestApplicationContext) { }

    create(port: number, options: any = {}): any {
        return createWebsocket(qqBotConfig);
    }

    bindClientConnect(server, callback: Function) {
        server.on('READY', data => {
            console.log('[READY] 事件接收 :', data);
        })
        server.on('PUBLIC_GUILD_MESSAGES', data => {
            console.log('[PUBLIC_GUILD_MESSAGES] 事件接收 :', data);
            callback(data)
        })
        server.on('GUILDS', data => {
            console.log('[GUILDS] 事件接收 :', data);
            callback(data)
        })
    }

    bindMessageHandlers(
        client: WebSocket,
        handlers: MessageMappingProperties[],
        process: (data: any) => Observable<any>,
    ) {
        process(handlers[0].callback(client))
    }

    close(server) {
        server.close();
    }
}
