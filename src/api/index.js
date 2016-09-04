import { Router } from 'express';

import stepRoutes from './steps/routes'
import groupRoutes from './groups/routes'
import userRoutes from './users/routes'

let routes = new Router()

routes.use('/steps', stepRoutes)
routes.use('/groups', groupRoutes)
routes.use('/users', userRoutes)

export default routes
