import { Router } from "express";
import pool from "../db.js";
import { deleteStudents, getbyid, getstudents, postStudents, updateStudents } from "../controllers/student.controller.js";
const route = Router()


  route.get('/student',getstudents)
  route.get('/student/:id',getbyid)
  route.post('/student',postStudents)
  route.put("/student/:id",updateStudents)
  route.delete("/student/:id",deleteStudents)

  export default route