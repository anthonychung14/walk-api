import Group from './model'
import _ from 'lodash'

export function params(req, res, next, code) {  
  console.log(req.params.code, "this is her id")
  Group
    .findOne({
      "code": code
    })
    .populate('code', 'chain')
    .exec()
    .then((group, err) => {
      if (!group) {
        next(new Error("Code does not exist"))
      }
      console.log(group, "group found")
      req.group = group
      next()
    })    
}

export function getOne(req, res, next) {
  console.log(req.params)
  console.log(group, "group here")
  const group = req.group
  res.json(group)
}


//on successful get with params
export function joinGroup(req, res, next) {  
  let { code } = req.body
  Group
    .findOne({
      code
    })
    .then((group, err) => {
      res.json(group)
    })
    .catch(err => {
      console.log("error", err)
      res.sendStatus(400)
    })    
}

//on successful post with substr code
export function createGroup(req, res, next) {    
  const { code } = req.body    
  Group
    .findOneAndUpdate({
      "code": code,
      "members": []
    }, {
      "upsert": true,
      "new": true
    })    
    .then((group, err) => {                        
      res.json(group);
    })
    .catch(err => {
      console.log("error", err)
      res.sendStatus(400);
    })    
}

