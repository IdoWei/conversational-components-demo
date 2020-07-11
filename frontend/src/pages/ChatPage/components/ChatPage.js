import React, {useState, useEffect} from "react";
import {useUserTyping, useBotTyping, ChatWindow} from "@conversationalcomponents/chat-window";
import PropTypes from 'prop-types';

const userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT81QmykJ0niSYh8dlYb7hLXE2Uf8JqurCjQw&usqp=CAU";
const botAvatar = "https://img.icons8.com/plasticine/2x/bot.png";

const ChatPage = (props) => {
    const { onSubmit, nextBotReply, setNextBotReply } = props;
    const [content, setContent] = useState([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");

    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        setNextBotReply(nextBotReply || "");
        setLastInputValue("");
    }, [content]);

    useEffect(() => {
        lastInputValue && setLastUnsubmittedInput("");
    }, [lastInputValue]);

    useUserTyping(content, setContent, lastUnsubmittedInput, lastInputValue, userAvatar);
    const isBotDoneTyping = useBotTyping(content, setContent, lastInputValue, botAvatar);

    useEffect(() => {
        if (!isBotDoneTyping || !nextBotReply) return;
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        lastEntry.message = nextBotReply;
        lastEntry.isLoading = false;
        setNextBotReply("");
    }, [isBotDoneTyping, nextBotReply]);

    return (
        <ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>Ido's Chat</div>}
            content={content}
            onChange={(text) => setLastUnsubmittedInput(text)}
            onSubmit={(text) => { 
                setLastInputValue(text); 
                onSubmit(text) 
            }}
        />
    );
};

ChatPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    nextBotReply: PropTypes.string.isRequired,
    setNextBotReply: PropTypes.func.isRequired,
};

export default ChatPage;
