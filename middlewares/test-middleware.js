const myLogger=  (req,res,next)=>
{
console.log("Logging Information .... ")
next();
}

export {myLogger}