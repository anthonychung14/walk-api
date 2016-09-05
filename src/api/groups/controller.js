import Group from './model'
import _ from 'lodash'
import { groupContract } from '../sampleData'

//API CONTRACT
export function echoContract(req, res, next){    
  console.log("<<<<< echo contract >>>>>>")  
  res.json(groupContract)
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


//VIEW GROUPS
export function getAllGroups(req, res, next) {  
  Group
    .find({})
    .populate('_id', 'groupCode')
    .exec()
    .then((groups, err) => {
      if (!groups) {
        next(err)
      }            
      res.json(groups)      
    })        
}

export function getGroup(req, res, next) {  
  const { groupCode } = req.params
  Group
    .findOne({ groupCode })
    .exec()
    .then((group, err) => {
      if (!group) {
        next(err)
      }      
      req.group = group
      res.send(group)
      next()
    })      
}

//JOIN ROOM
export function joinGroup(req, res, next) {          
  const { groupCode } = req.params
  Group
    .findOne({ groupCode })
    .exec()
    .then((group, err) => {
      if (!group) {
        next(err)
      }      
      req.group = group
      res.send(group)
    })      
}

