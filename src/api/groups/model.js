import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({      
  groupId: {
    type: String,
    required: true,    
  },
  chain: {
    type: Number,
    default: 0
  },
  challengeLevel: {
    type: Number,
    default: 0
  },

  dateFormed: Date,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
})

export default mongoose.model('Group', GroupSchema)