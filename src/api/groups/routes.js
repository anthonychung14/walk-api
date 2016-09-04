import { Router } from 'express'
import * as controller from './controller'

let router = new Router()

router.param('code', controller.params)
router.route('/')    
      .get(
        controller.findGroup)
      .post(
        controller.createGroup)

router.route('/:code')
      .get(
        controller.getOne)
      // .put(checkUser, controller.put)
      // .delete(checkUser, controller.delete)
      

export default router;