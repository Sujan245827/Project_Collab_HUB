// GroupChat.js
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './GroupChat.css';

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'You',
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log('Uploaded file:', file);
  };

  return (
    <>
      <AdminNavbar />

      <section className="group-chat-section">
        <div className="container">
          <h2>Group Chat</h2>

          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`chat-message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                  <div className="message-header">
                    <span className="sender">{message.sender}</span>
                    <span className="timestamp">{message.timestamp}</span>
                  </div>
                  <div className="message-text">{message.text}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <textarea
                className="message-input"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              ></textarea>
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
              <label htmlFor="file-upload" className="file-upload-label">
                <i className="bi bi-paperclip"></i>
              </label>
              <input id="file-upload" type="file" onChange={handleFileUpload} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupChat;