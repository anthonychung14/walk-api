import { Router } from 'express';
import _ from 'lodash'

//export default means that this will be called as a callback
export default ({ config, db }) => {    
  let api = Router();  

  api.get('/', (req, res) => {
    console.log("must keep going")
    res.send("now we're cooking")
  })
  
  return api;
  //returning an object, a router
}
