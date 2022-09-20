## 说明

开发QQ频道机器人的示例程序，使用技术栈nestJs + prisma + qq-guild-bot，仅供参考进行二开

## 安装

安装所需要的依赖

```bash
$ npm install
```

项目通过dotenv使用环境变量，没有安装可进行全局安装

```bash
$ npm install dotenv -g
```

## 配置

机器人配置：/src/config/qqbot.config.ts 配置qq机器人的开发设置

```javascript
import { AvailableIntentsEventsEnum } from 'qq-guild-bot'

// 订阅消息类型 参考：https://bot.q.qq.com/wiki/develop/api/gateway/intents.html
const { PUBLIC_GUILD_MESSAGES, GUILDS } = AvailableIntentsEventsEnum

export const qqBotConfig = {
    appID: '', // 申请机器人时获取到的机器人 BotAppID
    token: '', // 申请机器人时获取到的机器人 BotToken
    intents: [PUBLIC_GUILD_MESSAGES, GUILDS], // 事件订阅,用于开启可接收的消息类型
    sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
}
```

数据库配置：在.env.development 和 .env.production 配置对应的开发环境和生产环境数据库连接url

```javascript
DATABASE_URL=""
```

## 开始

将schema.prisma同步数据库表结构

```bash
$ npm run db:push-dev  //开发环境
```

生成本地prisma client

```bash
$ npm run db:generate
```

本地启动项目

```bash
$ npm run start:dev
```

