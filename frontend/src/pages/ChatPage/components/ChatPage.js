import React, {useState, useEffect} from "react";
import {useUserTyping, useBotTyping, ChatWindow} from "@conversationalcomponents/chat-window";

const userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT81QmykJ0niSYh8dlYb7hLXE2Uf8JqurCjQw&usqp=CAU";
const botAvatar = "https://img.icons8.com/plasticine/2x/bot.png";

const ChatPage = () => {
    const [content, setContent] = useState([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");
    const [nextBotReply, setNextBotReply] = useState("");

    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        setNextBotReply(lastInputValue);
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
    }, [isBotDoneTyping]);

    return (
        <ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>Ido's Chat</div>}
            content={content}
            onChange={(text) => setLastUnsubmittedInput(text)}
            onSubmit={(text) => setLastInputValue(text)}
        />
    );
};

export default ChatPage;
