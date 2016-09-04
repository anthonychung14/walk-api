import { Router } from 'express'
import * as controller from './controller'

let router = new Router()
router.route('/')
    .get(controller.findGroup)
    .post(controller.createGroup)

export default router;