import Step from './model'
import _ from 'lodash'

export function getSteps(req, res, next) {
  console.log("are you even firing")
  // res.json({a: "hello"})
  res.sendStatus(200)
}

export function checkUpdate(req,res,next) {
  console.log("checking for updates")
  next()
}

export function postSteps(req, res, next) {  
  Step
    .create({
      todaySteps: 1000
    })    
    .then((steps, err) => {      
      console.log(steps, "created")
      res.json(steps)
    })
    .catch(err => {
      console.log("error", err)
    })    
}

