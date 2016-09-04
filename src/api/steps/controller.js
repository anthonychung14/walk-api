import Steps from './model'
import _ from 'lodash'

export default () => {

  let stepController = {}

  stepController.get = function(req, res, next){
    
    res.json("hello")

  }

  stepController.post = (req, res, next) => {
    res.send(200)
  }

  return stepsController
}