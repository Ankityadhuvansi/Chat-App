import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
    const parseMessage = (msg) => {
        // If message is already an object, return it
        if (typeof msg === 'object' && msg !== null) {
            return msg;
        }

        // Handle empty or undefined messages
        if (!msg) {
            return { body: "No message" };
        }

        try {
            // Check if the message is valid JSON
            if (typeof msg === 'string' && (msg.startsWith('{') || msg.startsWith('['))) {
                return JSON.parse(msg);
            }
            // If not JSON, treat as plain text
            return { body: msg };
        } catch (error) {
            console.error("Error parsing message:", error.message);
            return { body: msg }; // Return original message as plain text
        }
    };

    const messageContent = parseMessage(message);

    return (
        <div className="flex p-4 rounded-lg bg-gray-100">
            <div className="text-gray-800">
                {messageContent.body}
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

Message.defaultProps = {
    message: "No message"
};

export default Message;