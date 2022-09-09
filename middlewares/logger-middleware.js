 const logger=  (req,res,next)=>
 {
 console.log("Logged")
 next();
 }

 export {logger}