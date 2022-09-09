import express from "express"
import router from './routes/routes.js';
import bodyParser from "body-parser"
import { logger } from "./middlewares/logger-middleware.js";
import { myLogger } from "./middlewares/test-middleware.js";
import {routes} from './routes/testroutes.js'
var app = express()

const port = 3000

// Application Level Middleware
app.use(logger)
app.use(bodyParser.urlencoded({extended:false}))
app.use("/", router)
// console.log(routes)
app.use("/", routes)
app.listen(port , ()=>
{
  console.log(`Server is listening at port no ${port}`)
})

