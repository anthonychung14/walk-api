import User from './model'
import _ from 'lodash'

export function getUser(req, res, next){
  res.sendStatus(200)
}

export function createUser(req, res, next){
  User
    .create({
      name: "Anthony Chung"
    })    
    .then((user, err) => {            
      res.json(user)
    })
    .catch(err => {
      console.log("error", err)
      res.sendStatus(400)
    })    
}