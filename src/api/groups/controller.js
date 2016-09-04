import Group from './model'
import _ from 'lodash'

export function params(req, res, next, code) {      
  Group
    .findOne({
      groupId: code
    })
    .populate('code')
    .exec()
    .then((group, err) => {
      if (!group) {
        next(new Error("Code does not exist"))
      }
      req.group = group
      console.log(group, "group")
      next()
    })    
}

export function getOne(req, res, next) {
  console.log(req.params)
  const group = req.group
  res.json(group)
}

export function findGroup(req, res, next) {
  const { code } = req.query.code
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

export function createGroup(req, res, next) {    
  const { groupId } = req.body    
  Group
    .findOneAndUpdate({
      "groupId": groupId,
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


