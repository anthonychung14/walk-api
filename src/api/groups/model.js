import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({        
  groupCode: {
    type: String,
    required: true,
    unique: true
  },
  chain: {
    type: Number,
    default: 0
  },
  challengeLevel: {
    type: Number,
    default: 0
  },
  dateFormed: {
    type: Number,
    default: 0
  },
  members: Array
}, {
  "collections": 'Groups'
})

export default mongoose.model('Group', GroupSchema)

// members: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   }]