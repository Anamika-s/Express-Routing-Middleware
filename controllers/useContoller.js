import path from "path"
const __dirname= path.resolve()


const userController = (req,res)=>
{
  res.sendFile(path.join(__dirname + "/views/createuser.html"))
}

const saveForm = (req,res)=>
{
  console.log(req.body)
  // res.send(req.body)
  res.send(req.body.name)
  // res.send("Data Submitted")
}
export {userController, saveForm}