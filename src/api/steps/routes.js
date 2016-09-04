import { Router } from 'express'
import controller from './controller'

export default () => {
  let steps = Router()

  // steps.param('id', controller.params);

  steps.route('/')
    .get(controller.get)
    .post(checkUser ,controller.post)

  // steps.route('/:id')
  //   .get(controller.getOne)
  //   .put(checkUser, controller.put)
  //   .delete(checkUser, controller.delete)

};