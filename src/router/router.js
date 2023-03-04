const express = require("express");
const router = new express.Router();
router.get("/" , (req,res)=>{
    res.render("index");
})
router.get("/about",(req,res)=>{
    res.render("about");
})

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/contact",(req,res)=>{
    res.render("contact");
})
module.exports = router;