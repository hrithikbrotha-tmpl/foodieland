const db = require("./../database/models");
 
module.exports = {
getContent : async(req , res)=>{
              const data = await db.questions.findAll();
              if(data){
                            res.status(200).json(data);
              }
              else{
                  res.status(400).send("NO DATA!");
              }
}
};