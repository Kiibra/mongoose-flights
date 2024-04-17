import { Router } from "express"
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.get('/', mealsCtrl.new)

router.post('/', mealsCtrl.create)

export{
  router
}