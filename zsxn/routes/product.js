const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
  //创建一个key值 以便遍历数据
    var output={product:{}};
    var sql1="SELECT * FROM list";
    Promise.all([
      new Promise(function(open){
        pool.query(sql1,[],(err,result)=>{
          if(err) console.log(err);
          output.product=result;
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
