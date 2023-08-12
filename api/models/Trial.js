import mongoose from 'mongoose';

const TrialSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Trial", TrialSchema)
