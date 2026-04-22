const express = require("express");
const router = express.Router();

const {project} = require("../middleware/auth.middleware");

//user booking route
router.post("/",protect,(req,res)=>{
    res.send("Create booking");

});