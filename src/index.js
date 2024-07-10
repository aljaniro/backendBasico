import express from "express";
import ruta from "./routes/index.routes.js";
import route from "./routes/students.routes.js";
const app = express()

app.use(express.json())
app.use(ruta)
app.use(route)
app.use((req,res,next)=>{
    res.status(404).json({
        message:"RUTA NO EXISTE"
    })
})
app.listen(3000)
console.log("server running on port 3000")