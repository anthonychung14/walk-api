import { Router } from 'express';

export default ({ config, db }) => {
  let api = Router();  

  api.get('/', (req, res) => {
    res.send("now we're cooking")
  })
  
  return api;
}
