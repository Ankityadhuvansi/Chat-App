import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from "../Message";

class ChatHistory extends Component {
    render() {
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.length > 0
            ? this.props.chatHistory.map((msg, index) => (
                <Message key={index} message={msg.data} />
            ))
            : <p>No messages yet.</p>;

        return (
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;