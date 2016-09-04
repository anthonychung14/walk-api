import { Router } from 'express'
import * as controller from './controller'

let router = new Router()
router.route('/')
    .get(controller.getUser)
    .post(controller.createUser)

export default router;