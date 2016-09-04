import _ from 'lodash'
import { Router } from 'express';

export default () => {
  let steps = Router();  

  steps.get('/', (req, res) => {    
    res.send("SENDING STEPS")
  })

  steps.post('/', (req, res) => {
    res.send("POSTING STEPS")
  })

  return steps;
}
