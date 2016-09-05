import { Router } from 'express'
import * as controller from './controller'

let router = new Router()

//API CONTRACT
router.route('/data')    
      .get(
        controller.echoContract)

//VIEW ROOM
router.route('/:groupCode')
      .get(
        controller.getGroup
      , controller.noGroup)      

//JOIN ROOM
router.route('/')          
      .get(
        controller.getAllGroups
      , controller.echoContract)
      .post(
        controller.createGroup)
      .put(        
        controller.joinGroup)      
      

export default router;