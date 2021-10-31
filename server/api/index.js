import express from 'express';
import Message from '../models/Message.js';
const router = express.Router();

router.post('/api/v1/message/new', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    if (!message) {
      return res.send(500).json({
        success: false,
        message: 'message create failed',
      });
    }
    return res.status(201).json({
      success: true,
      message: 'create successfully',
      data: message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/api/v1/messages/sync', async (req, res) => {
  try {
    const messages = await Message.find();

    if (!messages) {
      return res.send(500).json({
        success: false,
        message: 'data fetch failed',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'data fetch successfully',
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
