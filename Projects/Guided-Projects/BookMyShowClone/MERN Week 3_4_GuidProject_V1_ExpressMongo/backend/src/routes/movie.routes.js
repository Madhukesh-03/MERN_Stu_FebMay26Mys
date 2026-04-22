const express = require("express");
const router = express.Router();

const {project} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//public routes
router.get("/",(req,res)=>{
    res.send("Get movies");
});

//Admin only route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create movie");
});
module.exports = router;