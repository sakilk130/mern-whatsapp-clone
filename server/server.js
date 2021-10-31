import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import apiRoutes from './api/index.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(apiRoutes);

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true,
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log(`DB is connected`);
  const messageCollection = db.collection('messages');
  const changeStream = messageCollection.watch();
  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        createdAt: messageDetails.createdAt,
      });
    } else {
      console.log('Error triggering pusher');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
