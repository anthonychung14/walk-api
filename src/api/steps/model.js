import mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
  stepsTaken: Number
}, {
  collection: 'stepsWeek'
})

export default mongoose.model('Step', StepSchema)