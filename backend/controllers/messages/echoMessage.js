import { echoMessage } from "../../services/messagesService.js";

export default async ({ response, bodyData }) => {
    const { message } = bodyData;

    response.body = await echoMessage(message);
};