const express = require("express");
const router = express.Router();
const {Product} = require("../models/index");


router.get("/api/get",async (req, res) => {
      let products=await Product.find({},{
        _id:0,
        createdAt:0,
        updatedAt:0
      });
      res.send(products)
});
router.post("/api/post", (req, res) => {
       let {name,img,summary}=req.body;
      //  console.log(req.body)
       if(!name) return res.send({status:0,message:'Error:NAME NULL ERROR!'})
       Product.create({
         name:name,
         img:img,
         summary:summary
       })
       res.send("ok");
});


module.exports=router;