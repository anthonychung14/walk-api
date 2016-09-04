import { Router } from 'express';

export default ({ config, db }) => {
  let api = Router();  

  api.get('/', (req, res) => {
    console.log("must keep going")
    res.send("now we're cooking")
  })
  
  return api;
}
