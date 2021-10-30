import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 5000;

app.post('api/v1/message/new', async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
mongoose
  .connect('mongodb://localhost:27017/mern-whatsapp-clone')
  .then(() => {
    console.log(`Mongodb connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
