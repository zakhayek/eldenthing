import React, { useState } from 'react';
import { generateMessage } from './RandomMessageGenerator';

function MessageFrame() {
    const [message, setMessage] = useState(generateMessage());

    const handleNewMessage = (e) => {
        e.stopPropagation();
        setMessage(generateMessage());
    }

    return (
        <div className="msgContainer">
            <div className="message">
                {message}
            </div>
            <button className="button" onClick={handleNewMessage}>
                New Message
            </button>
        </div>
    )
}

export default MessageFrame;
