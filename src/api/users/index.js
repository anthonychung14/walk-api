import _ from 'lodash'
import { Router } from 'express';

export default ({ db }) => {
  let steps = Router();  

  steps.get('/', (req, res) => {
    console.log(db)
    res.send("SENDING STEPS")
  })

  steps.post('/', (req, res) => {
    res.send("POSTING STEPS")
  })

  return steps;
}
