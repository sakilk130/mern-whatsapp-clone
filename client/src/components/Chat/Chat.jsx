import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import moment from 'moment';
import axios from '../../utils/axios';

function Chat({ messages }) {
  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/api/v1/message/new', {
      message: input,
      name: 'Sakil Khan',
      received: true,
    });

    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.data &&
          messages.data.map((message) => (
            <p
              className={`chat__message ${
                message.received && 'chat__receiver'
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">
                {moment(message.createdAt).fromNow()}
              </span>
            </p>
          ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
