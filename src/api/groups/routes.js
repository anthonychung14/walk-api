import { Router } from 'express'
import * as controller from './controller'

let router = new Router()

//API CONTRACT
router.route('/data')    
      .get(
        controller.echoContract)

//JOIN ROOM
router.route('/')          
      .get(
        controller.joinGroup
      , controller.echoContract
      )
      .post(
        controller.createGroup)
//MAKE ROOM
      

//VIEW ROOM
router.param('groupCode', controller.viewGroups)
router.route('/:groupCode')
      .get(
        controller.getOne)




      // .put(
        //checkUser
      //, controller.put)
      // .delete(
        //checkUser
      //, controller.delete)
      
export default router;