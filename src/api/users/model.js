import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({  
  userId: Number,
  name: String,
  date: Date,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  }
})

export default mongoose.model('User', UserSchema)


/*

userId:
chain:
todaySteps:
date:

1. open app, we need to update steps taken that day



2. calculate the average on the first time they open it that day


*/

