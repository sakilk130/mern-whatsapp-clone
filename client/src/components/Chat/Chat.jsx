import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Sakil</span>
          Message
          <span className="chat__timestamp">date</span>
        </p>
        <p className=" chat__message chat__receiver">
          <span className="chat__name">Sakil</span>
          Message
          <span className="chat__timestamp">date</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Sakil</span>
          Message
          <span className="chat__timestamp">date</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
