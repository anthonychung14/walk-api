import User from './model'
import _ from 'lodash'

export function getUser(req, res, next){
  console.log("are you even firing")
  // res.json({a: "hello"})
  res.sendStatus(200)
}

export function createUser(req, res, next){
  console.log("userPost is working too")
  // res.json({a: "hello"})
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