import React, { useState } from 'react';
import ChatPage from '../components/ChatPage.js';
import BackendService from '../../../services/BackendService.js';

const ChatPageContainer = props => {
    const [nextBotReply, setNextBotReply] = useState("");

    const onSendMessage = async (message) => {
        let botResponse;

        try {
            botResponse = await BackendService.EchoMessage(message);
        } catch(e) {
            console.error('Caught error while trying to invoke API: EchoMessage', e)
            botResponse = "Seems like I have an issue. Please try again in few moments."; // notify the user there's an issue (only for better ux)
        }

        setNextBotReply(botResponse);
    }

    return (
        <ChatPage onSubmit={onSendMessage} nextBotReply={nextBotReply} setNextBotReply={setNextBotReply}/>
    )
}

export default ChatPageContainer;
