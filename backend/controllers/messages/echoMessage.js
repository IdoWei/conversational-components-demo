import { echoMessage } from "../../services/messagesService.js";

export default ({ response, bodyData }) => {
    const { message } = bodyData;

    console.log('entered echoMessage API with body: ', bodyData);
    response.body = echoMessage(message);
};