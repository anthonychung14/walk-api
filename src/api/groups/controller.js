import Group from './model'
import _ from 'lodash'
import { groupContract } from '../sampleData'

//API CONTRACT
export function echoContract(req, res, next){  
  console.log("<<<<< echo contract >>>>>>")
  res.json(groupContract)
}

//VIEW ROOM
export function viewGroups(req, res, next, code) {  
  Group
    .findOne({ groupCode: code })
    .exec()
    .then((group, err) => {
      if (!group) {
        next(new Error("Code does not exist"))
      }      
      req.group = group
      next()
    })      
}

export function getOne(req, res, next) {  
  const group = req.group  
  res.json(group)
}

//JOIN ROOM
export function joinGroup(req, res, next) {          
  const { groupCode } = req.query  
  Group
    .findOne({ groupCode })
    .exec()
    .then((group, err) => {
      if (!group) {
        next(new Error("Code does not exist"))
      }      
      req.group = group
      next()
    })  
}

//MAKE GROUP
export function createGroup(req, res, next) {    
  const { groupCode } = req.body    
  let newGroup = new Group({
    "groupCode": groupCode
  })
  
  newGroup
    .save()
    .then((group, err) => {      
      console.log(group, "hooray")
      res.sendStatus(201)
    })
    .catch(err => {
      console.log("error", err)
      res.sendStatus(400);
    })        
}
