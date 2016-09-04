import User from './model'
import _ from 'lodash'

export function getUser(req, res, next){
  console.log("are you even firing")
  // res.json({a: "hello"})
  res.sendStatus(200)
}

export function createUser(req, res, next){
  console.log("post is working too")
  // res.json({a: "hello"})
  res.sendStatus(200)
}