import { AvailableIntentsEventsEnum } from "qq-guild-bot";

// 订阅消息类型 参考：https://bot.q.qq.com/wiki/develop/api/gateway/intents.html
const { PUBLIC_GUILD_MESSAGES, GUILDS } = AvailableIntentsEventsEnum;

export const qqBotConfig = {
	appID: "", // 申请机器人时获取到的机器人 BotAppID
	token: "", // 申请机器人时获取到的机器人 BotToken
	intents: [PUBLIC_GUILD_MESSAGES, GUILDS], // 事件订阅,用于开启可接收的消息类型
	sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
};
