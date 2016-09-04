import { Router } from 'express';
import stepRoutes from './steps/routes'

let routes = new Router()
routes.use('/steps', stepRoutes)
export default routes
