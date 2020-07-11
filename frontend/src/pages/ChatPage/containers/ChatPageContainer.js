import React, { useState } from 'react';
import ChatPage from '../components/ChatPage.js';
import BackendService from '../../../services/BackendService.js';

const ChatPageContainer = props => {
    const [nextBotReply, setNextBotReply] = useState("");

    const onSendMessage = async (message) => {
        let botResponse;

        botResponse = await BackendService.EchoMessage(message);
        setNextBotReply(botResponse);
    }

    return (
        <ChatPage onSubmit={onSendMessage} nextBotReply={nextBotReply} setNextBotReply={setNextBotReply}/>
    )
}

export default ChatPageContainer;
