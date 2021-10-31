import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MessageSchema = new Schema(
  {
    message: String,
    name: String,
    received: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Message', MessageSchema);
