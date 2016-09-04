import { Router } from 'express';
import _ from 'lodash'

export default ({ config, db }) => {    
  let api = Router();  

  api.get('/', (req, res) => {    
    res.send("now we're cooking")
  })
  
  return api;  
}
