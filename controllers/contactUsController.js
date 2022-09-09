import path from "path"
const __dirname= path.resolve()

const contactUsController = (req,res)=>
{
  res.sendFile(path.join(__dirname + "/views/contactus.html"))
}

export default contactUsController;