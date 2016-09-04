import { Router } from 'express'
import * as controller from './controller'

let router = new Router()
router.route('/')
    .get(controller.checkUpdate, controller.postSteps)
    .post(controller.postSteps)

export default router;