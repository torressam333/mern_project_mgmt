/**Mongoose model for Project */
import mongoose from 'mongoose';

/** Project interface */
export interface IProject {
  name: string;
  description: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  clientId?: mongoose.Schema.Types.ObjectId;
  isDeleted?: boolean;
}

const ProjectSchema = new mongoose.Schema<IProject>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    // Always assign _id relating project ref -> client id
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<IProject>('Project', ProjectSchema);
