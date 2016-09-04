import { Router } from 'express'
import * as controller from './controller'

let router = new Router()
router.route('/')
    .get(controller.getSteps)

export default router;