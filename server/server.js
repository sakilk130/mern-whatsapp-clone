import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
const app = express();
const PORT = process.env.PORT || 5000;
import apiRoutes from './api/index.js';
app.use(express.json());
app.use(apiRoutes);

const pusher = new Pusher({
  appId: '1290204',
  key: 'd262f86fb55e2f183162',
  secret: '72834afd8f444751df9b',
  cluster: 'ap2',
  useTLS: true,
});

mongoose.connect('mongodb://localhost:27017/mern-whatsapp-clone');

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log(`DB is connected`);
//   const messageCollection = db.collection('messages');
//   const changeStream = messageCollection.watch();
//   changeStream.on('change', (change) => {
//     console.log('change');
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
