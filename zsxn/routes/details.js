const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
    var id=req.query.id;
  //创建一个key值 以便遍历数据
    var output={product:{}};
    var sql2 = "SELECT * FROM details LEFT JOIN list ON details.pid=list.id WHERE pid=?"
    Promise.all([
      new Promise(function(open){
        pool.query(sql2,[id],(err,result)=>{
          if(err) console.log(err);
          output.product=result[0];
          open();
          console.log("查询product完成!");
        })
      }),
      
     

    ]).then(function(){
      res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
      })
      res.write(JSON.stringify(output));
      res.end();
      console.log("响应完成!");
    })
  })
  
  module.exports=router;
