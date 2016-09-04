import mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({  
  // userId: Number,
  // chain: Number,
  // date: Date,
  todaySteps: Number
}, {
  collections: 'Steps'
})

export default mongoose.model('Step', StepSchema)


/*

userId:
chain:
todaySteps:
date:

1. open app, we need to update steps taken that day



2. calculate the average on the first time they open it that day


*/

