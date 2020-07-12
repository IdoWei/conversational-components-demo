import MessagesService from "../../services/messagesService.js";

export default ({ response, bodyData }) => {
    const { message } = bodyData;
    const messagesService = new MessagesService();

    console.log('entered echoMessage API with body: ', bodyData);
    response.body = messagesService.echoMessage(message);
};