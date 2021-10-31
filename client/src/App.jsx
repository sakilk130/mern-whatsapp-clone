import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './utils/axios';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/messages/sync')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    var pusher = new Pusher(process.env.REACT_APP_KEY, {
      cluster: process.env.REACT_APP_CLUSTER,
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      setMessages(...messages, data);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
