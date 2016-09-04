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
  console.log("post is working too")
  Step
    .create({
      todaySteps: 1000
    })
    .then((err, steps) => {      
      res.sendStatus(200)
    })
}

//write to the database