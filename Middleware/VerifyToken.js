import jwt from 'jsonwebtoken';

export const verfiytoken = async(req,res,next)=>{
    
    try{ 
        var token = req.header("authorization");
         let jwtsecretkey = 'sanjay';
         if (!token){
             res.send({
                 status :404,
                 message:"token not valid",
               
             })
         }
         const decode = jwt.verify(token,jwtsecretkey);
         req.user=decode;
         next();
        
        
        }
        catch(e){
          return res.send({
              status:200, message:"faild",result:e
          })
        }
   

}