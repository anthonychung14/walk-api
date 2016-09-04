import Group from './model'
import _ from 'lodash'

export function findGroup(req, res, next){
  console.log("are you even firing")  
  res.sendStatus(200)
}

export function createGroup(req, res, next){
  console.log("post is working too")    
  Group
    .create({
      name: "The Christopher Walkins"
    })    
    .then((group, err) => {            
      res.json(group)
    })
    .catch(err => {
      console.log("error", err)
      res.sendStatus(400)
    })    
}