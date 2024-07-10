import { Router } from "express"

const ruta = Router()

import { pingpong } from "../controllers/student.controller.js"


ruta.get('/ping',pingpong)

  export default ruta