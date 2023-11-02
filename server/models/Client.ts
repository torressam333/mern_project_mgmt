/**Mongoose model for Client */
import mongoose from 'mongoose';

/** Client interface */
export interface IClient {
  name: string;
  email: string;
  phone?: string;
}

const ClientSchema = new mongoose.Schema<IClient>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
});

export default mongoose.model<IClient>('Client', ClientSchema);
